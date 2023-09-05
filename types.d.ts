type TGenre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

type TDeveloper = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type TPublisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type TGame = {
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

type TGames = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: TPlatform }[];
};

type TPlatform = {
  id: number;
  name: string;
  slug: string;
};
