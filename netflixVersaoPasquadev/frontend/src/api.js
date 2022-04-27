const API_KEY = "7e5c4f7309195e7aaf3da335a966d6b1";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    },
    {
        name: "action",
        title: "Ação",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        isLarge: false,
    },
    {
        name: "fantasy",
        title: "Fantasia",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
        isLarge: false,
    },
    {
        name: "horror",
        title: "Terror",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        isLarge: false,
    },
    {
        name: "thrillers",
        title: "Suspense",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=53`,  
        isLarge: false,      
    },
    {
        name: "animations",
        title: "Animações",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
        isLarge: false,
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