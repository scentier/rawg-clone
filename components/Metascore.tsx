interface Props {
  metacritic: number;
}

export default function Metascore({ metacritic }: Props) {
  return (
    <div className="border-orange-400 rounded-lg border-s-orange-400 border-solid border-2 p-1 text-center w-auto">
      {metacritic}
    </div>
  );
}
