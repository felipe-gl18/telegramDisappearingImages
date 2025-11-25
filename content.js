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
