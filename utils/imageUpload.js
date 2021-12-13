// eslint-disable-next-line import/prefer-default-export
export const imageUpload = async (images) => {
  const imgArray = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of images) {
    const formData = new FormData();
    formData.append("file", item);
    formData.append("upload_preset", process.env.CLOUD_UPDATE_PRESET);
    formData.append("cloud_name", process.env.CLOUD_NAME);
    // eslint-disable-next-line no-await-in-loop
    const res = await fetch(process.env.CLOUD_API, {
      method: "POST",
      body: formData,
    });
    // eslint-disable-next-line no-await-in-loop
    const data = await res.json();
    imgArray.push({ public_id: data.public_id, url: data.secure_url });
  }
  return imgArray;
};
