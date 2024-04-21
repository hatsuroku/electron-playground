window.ipcRenderer.on("main-process-message", (_event, ...args) => {
  console.log("[Receive Main-process message]:", ...args);
});

export async function callMain(methodStr: string, ...args: any[]) {
  return await window.ipcRenderer.invoke("call-main", methodStr, ...args)
}
