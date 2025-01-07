// See the Electron documentation for details on how to use preload scripts:

import { contextBridge, ipcRenderer } from "electron"

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const Authentication = {
    invokeLogin: () => {
        ipcRenderer.invoke("login")
    },
    onLoginSuccess: (cb: any) => ipcRenderer.on("login-success", (event, data) => cb(data))

}
contextBridge.exposeInMainWorld("authentication", Authentication)