import noImg from '../assets/No_Image.jpg'


function getCroppedImage(url: string) {

  if (!url) return noImg;

  return url.replace(
    "media/",
    "media/crop/600/400/"
  );
}

export default getCroppedImage