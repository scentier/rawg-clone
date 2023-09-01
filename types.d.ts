type TGenre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

type TGames = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: TPlatform }[];
};

type TPlatform = {
  id: number;
  name: string;
  slug: string;
};
