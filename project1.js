
const urll= 'https://catfact.ninja/fact'
// fetch(urll)
// .then(res=>res.json())
// .then(console.log)


// const searchMovies = async (title) => {
//   await fetch(`${API_URL}&s=${title}`).then(response=>response.json())
//   .then(data=>setMovies(data.Search)).catch((error)=>{console.log(error)})

const fd= async()=>{await fetch(urll).then(res=>res.json()).then(console.log)}

