import { players } from "../data/PlayersData.tsx";

export const PlayerPresentation = () => {
  return (
    <>
      <section className="bg-steel">
        <div className="grid grid-cols-1 bg-steel md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <div key={player.id} className="player-card group">
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={player.url}
                    alt={player.description}
                    className="object-cover"
                  />
                </div>

                <div className="col absolute inset-0 items-center justify-center bg-steel bg-opacity-80 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <h2 className="subheading-alt subheading-alt-light">
                    {player.title}
                  </h2>
                  <p className="body body-light text-center text-snow">
                    {player.description}
                  </p>
                  <span className="photocred photocred-light absolute bottom-2 right-2">
                    Photo: {player.photographer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
