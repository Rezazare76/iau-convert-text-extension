const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");

textInput.addEventListener("input", () => {
  textOutput.value = `%${textInput.value
    .replace(/ /g, "%")
    .replace(/ی/g, "%")
    .replace(/ک/g, "%")}%`;
});

document.getElementById("copy").addEventListener("click", () => {
  navigator.clipboard.writeText(textOutput.value);
});
