import { callMain } from "./demos/ipc"
import { useState } from "react"

function Test() {
  const [desc, setDesc] = useState('')
  const [val, setVal] = useState(0)

  const [mainRet, setMainRet] = useState<any>()
  const [method, setMethod] = useState('')
  const [args, setArgs] = useState<any[]>([])

  const describe = async () => {
    setDesc(await callMain('capi.describe', val))
  }

  const invokeMain = async () => {
    if (args.length === 0) {
      setMainRet(await callMain(method))
    } else {
      setMainRet(await callMain(method, ...args))
    }
  }

  return (
    <div>
      <button onClick={describe}>go</button>
      <input type="text" onChange={(event) => {
        if (!event.target.value || event.target.value.length === 0) return
        setVal(parseInt(event.target.value))
      }}></input>
      <div>{desc}</div>

      <button onClick={invokeMain}>invoke</button>
      <input type="text" onChange={(event) => {
        if (!event.target.value || event.target.value.length === 0) return
        setMethod(event.target.value)
      }}></input>
      <input type="text" onChange={(event) => {
        if (!event.target.value || event.target.value.length === 0) {
          setArgs([])
        } else {
          setArgs(event.target.value.split(',,'))
        }
      }}></input>
      <div>{desc}</div>
    </div>
  )
}

export default Test