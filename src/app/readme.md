/*
export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async () => {
  try {
    const client = await clientPromise
    const db = client.db("stores")
    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();

    return {
      props: {
        isConnected: true,
        movies: JSON.parse(JSON.stringify(movies))
      }
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false, movies: [] },
    }
  }
}
*/


    /*
    await db
        .collection("movies")
        .insertMany([
          {
            name: "Pulp Fiction (1994)",
            developed by:  "Dirigida por Quentin Tarantino, esta película es un viaje no lineal a través de historias interconectadas de gángsters, violencia y humor negro en Los Ángeles.",
          },
          {
            name: "El Padrino (1972)",
            developed by:  "Dirigida por Francis Ford Coppola, es un épico drama criminal que sigue la vida de la familia Corleone mientras luchan por el poder en el mundo del crimen organizado.",
          },
          {
            name: "Titanic (1997)",
            developed by:  "Una emotiva historia de amor dirigida por James Cameron, ambientada en el trágico hundimiento del famoso barco Titanic.",
          },
          {
            name: "Forrest Gump (1994)",
            developed by:  "Dirigida por Robert Zemeckis, esta película cuenta la vida de Forrest Gump, un hombre con discapacidad intelectual que vive una vida extraordinaria y se convierte en testigo de momentos históricos clave.",
          },
          {
            name: "Matrix (1999)",
            developed by:  "Dirigida por los hermanos Wachowski, esta película de ciencia ficción sigue a Neo, un hacker que descubre que el mundo en el que vive es una simulación controlada por máquinas, lo que lo lleva a una búsqueda de la verdad y la libertad.",
          },
        ]);
        */