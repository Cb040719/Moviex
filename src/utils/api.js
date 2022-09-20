const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "?api_key=d2de612f3dac6c81b889ce802e9c3df0";

const GET = async(type, section, subsection, extra) => {
    const res = await fetch(`${BASE_URL}${type}/${section}/${subsection}${API_KEY}${extra}`);
    return res.json();
};

export {GET};  