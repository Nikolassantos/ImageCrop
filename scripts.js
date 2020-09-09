const photoFile = document.getElementById('photo-file');

document.getElementById('select-image').onclick = function () {
  photoFile.click();
};

window.addEventListener('DOMContentLoaded', () => {
  photoFile.addEventListener('change', () => {
    let file = photoFile.files.item();
    let reader = new FileReader();
    reader.readAsDataURL();
  });
});
