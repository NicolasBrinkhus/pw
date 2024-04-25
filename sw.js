self.addEventListener("push", () => {
  self.registration.showNotification("hello world", {});
});
