"use strict";

const modalWindow = document.querySelector(".modal");
const overlayBackground = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// attach the event listener to the 3 buttons 'Show modal'
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModalWindow);

// attach the event listener to the close button in the modal window
btnCloseModal.addEventListener("click", closeModalWindow);

// attach the event listener to the overlay background
overlayBackground.addEventListener("click", closeModalWindow);

// attach the event listener to the all page for a key pressed
document.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.key);
  // if the key Escape is pressed and the modal window doesn't have the class hidden
  // (the modal window is shown) then the closeModalWindow function is called
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden"))
    closeModalWindow();
});

/**
 * Open the modal window.
 */
function openModalWindow() {
  modalWindow.classList.remove("hidden");
  overlayBackground.classList.remove("hidden");
}

/**
 * Close the modal window.
 */
function closeModalWindow() {
  modalWindow.classList.add("hidden");
  overlayBackground.classList.add("hidden");
}
