export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file[0]);
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  // 이미지를 Cloudinary에 업로드 후 url 반환
  fetch(process.env.REACT_APP_CLOUDINARY_IMAGE_URL, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    console.log(response.url);
  });
}
