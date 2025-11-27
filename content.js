function handleSendMessageButtonClick() {
  const sendMessageButton = handleSendMessageButton();
  sendMessageButton.click();
}

function handleSendMessageButton() {
  const sendMessageButton = document.querySelector(
    ".Button.send.main-button.default.secondary.round.click-allowed"
  );
  if (!sendMessageButton) throw new Error("Button not found!");

  return sendMessageButton;
}

async function handleImageBlob(url) {
  const image = (await fetch(url)).blob();

  if (!image) throw new Error("Image not found!");

  return image;
}

(() => {
  if (window.__fileHandlerHooked) return;
  window.__fileHandlerHooked = true;

  const origin = HTMLInputElement.prototype.addEventListener;
  HTMLInputElement.prototype.addEventListener = (type, handler, opts) => {
    if (
      type === "change" &&
      this.type === "file" &&
      !window.__capturedFileHandler
    ) {
      window.__capturedFileHandler = handler;
      window.__capturedFileInput = this;
      console.log("File input handler captured.");
    }

    return origin.call(this, type, handler, opts);
  };

  console.log("Hook activated.");
})();
