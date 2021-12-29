// @ts-nocheck
const filePickerEl = document.getElementById('image');
const imagePreviewEl = document.getElementById('image-preview');

function showPreview() {
  const files = filePickerEl.files;

  if (!files || files.length === 0) {
    imagePreviewEl.style.display = 'none';
    return;
  }

  const pickedFile = files[0];
  imagePreviewEl.src = URL.createObjectURL(pickedFile);
  imagePreviewEl.style.display = 'block';
}

filePickerEl?.addEventListener('change', showPreview);
