import { Picker } from "emoji-picker-element/index.js";

const taskEmoji = () => {
  const emojiPicker = document.getElementById("new-task-form__emoji-button");
  const emojiTooltip = document.getElementById("new-task-form__emoji-tooltip");
  const newTaskInput = document.getElementById("new-task-form__input");

  const picker = new Picker();

  emojiTooltip.appendChild(picker);

  // Toggle emoji picker tooltip
  emojiPicker.addEventListener("click", () => {
    emojiTooltip.classList.toggle("shown");

    const removeShownClass = (event) => {
      if (
        event.target.nodeName !== "BUTTON" &&
        event.target.nodeName !== "EMOJI-PICKER"
      ) {
        emojiTooltip.classList.remove("shown");
        document.removeEventListener("click", removeShownClass);
      }
    };

    if (emojiTooltip.classList.contains("shown")) {
      document.addEventListener("click", removeShownClass);
    }
  });

  // Handle select
  picker.addEventListener("emoji-click", (event) => {
    const pickedEmoji = event.detail.unicode;
    emojiPicker.innerText = pickedEmoji;
    emojiTooltip.classList.remove("shown");
    newTaskInput.focus();
  });
};

export default taskEmoji;
