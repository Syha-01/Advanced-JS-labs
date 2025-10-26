// TODO: Select the 'toggle' button and the paragraph 'targetPara'.
const toggleBtn = document.querySelector('#toggle');
const targetParagraph = document.querySelector('#targetPara');

// TODO: Attach a 'click' listener to toggle a CSS class on the paragraph. (Hint: classList.toggle)
if (toggleBtn && targetParagraph) {
  toggleBtn.addEventListener('click', () => {
    targetPara.classList.toggle('hidden');
  });
} else {
  if (!toggleBtn) {
    console.log("Button with id 'toggle' not found.");
  }
  if (!targetParagraph) {
    console.log("Paragraph with id 'targetPara' not found.");
  }
}
