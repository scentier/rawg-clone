export type TPlatform = {
  id: number;
  name: string;
  slug: string;
};

export type TGames = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: TPlatform }[];
};
