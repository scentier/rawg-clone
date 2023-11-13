export type TGenre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

export type TDeveloper = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type TPublisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type TGame = {
  id: number;
  name: string;
  description: string;
  metacritic: number;
  released: string;
  parent_platforms: { platform: TPlatform }[];
  genres: TGenre[];
  developers: TDeveloper[];
  publishers: TPublisher[];
};

export type TGames = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: TPlatform }[];
};

export type TPlatform = {
  id: number;
  name: string;
  slug: string;
};
