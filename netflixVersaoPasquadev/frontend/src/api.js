const API_KEY = "7e5c4f7309195e7aaf3da335a966d6b1";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
    {
        name: "action",
        title: "Ação",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    },
    {
        name: "fantasy",
        title: "Fantasia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=14`,
    },
    {
        name: "horror",
        title: "Terror",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    },
    {
        name: "thrillers",
        title: "Suspenses",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=53`,        
    },
    {
        name: "animations",
        title: "Animações",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("getMovies error: ", error);
    }
}

export default categories;