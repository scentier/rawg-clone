export default (imgurl: string) => {
  return imgurl.replace(
    "media.rawg.io/media/",
    "media.rawg.io/media/crop/600/400/"
  );
};
