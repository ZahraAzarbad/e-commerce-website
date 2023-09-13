export async function convertImage(value) {
  if (typeof value === "string") {
    try {
      const url = `http://localhost:8000/images/products/images/${value}`;
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });
      console.log(file);
      return file;
    } catch (error) {
      throw new Error("can not convert that image to file");
    }
  } else {
    return value;
  }
}

export async function handleMedias(images) {
  let isAllString = images.find((item) => typeof item !== "string")
    ? false
    : true;

  const medias = [];
  // console.log(isAllString);
  if (isAllString) {
    for (let index = 0; index < images.length; index++) {
      const mediaFile = await convertImage(images[index]);
      medias.push(mediaFile);
    }
    return medias;
  } else {
    return undefined;
  }
}
