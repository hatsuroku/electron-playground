import koffi from "koffi";

const lib = koffi.load('cpplib/testsharedlib.dll')

export const add_one = lib.func('add_one', 'int', ['int'])
export const describe = lib.func('describe', 'str', ['int'])


export const say_hello = lib.func('say_hello', 'void', [])
export const say_sth = lib.func('say_sth', 'void', ['str'])


const TransferCallback = koffi.proto('GiveInfo', 'void', ['int', 'str'])
export const more_desc = lib.func('more_desc', 'void', ['int', koffi.pointer(TransferCallback)])