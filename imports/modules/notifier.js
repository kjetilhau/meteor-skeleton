import Noty from "noty"

// ***************************************************************
// Client-side notification module
// ***************************************************************

Noty.overrideDefaults({
  layout: "topRight",
  type: "success",
  theme: "sunset",
  closeWith: ["click", "button"],
  timeout: 2000,
  progressBar: false
})

// Notifier API
export const notify = (message, type) => {
  return new Noty({
    type: type || "info",
    text: message
  }).show()
}
