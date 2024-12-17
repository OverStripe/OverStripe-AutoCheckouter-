chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    const statusMessage = request.enabled
      ? "Over Stripe is now active!"
      : "Over Stripe is now inactive.";

    console.log(statusMessage);
    showStatusMessage(statusMessage, request.enabled);
  }
});

function showStatusMessage(message, isActive) {
  const banner = document.createElement("div");
  banner.textContent = message;
  banner.style.position = "fixed";
  banner.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.padding = "10px";
  banner.style.backgroundColor = isActive ? "green" : "red";
  banner.style.color = "white";
  banner.style.textAlign = "center";
  banner.style.zIndex = "9999";
  document.body.appendChild(banner);

  setTimeout(() => banner.remove(), 3000);
}
