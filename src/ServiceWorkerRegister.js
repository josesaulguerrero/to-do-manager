import { Workbox } from "workbox-window";

export const serviceWorkerRegister = () => {
   if (process.env.NODE_ENV !== "production") {
      return;
   }

   if ("serviceWorker" in navigator) {
      const wb = new Workbox("sw.js");
      wb.addEventListener("installed", (event) => {
         if (event.isUpdate) {
            if (confirm("new app update is available, click ok to refresh")) {
               window.location.reload();
            }
         }
      });
      wb.register();
   }
};