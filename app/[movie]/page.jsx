import Image from "next/image"
export async function generateStaticParams(){
    const data= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res=await data.json()
    return res.results.map((movie)=>({
        movie:toString(movie.id)
    }))
}
export default async function MovieDetail({params}){
    const {movie}=params
    const imagePath='https://image.tmdb.org/t/p/original/'
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,{next:{revalidate:60}})
    const res=await data.json()
    return (
        <div>
            <h1>{res.title}</h1>
            <h1>{res.release_date}</h1>
            <h1>{res.runtime} minutes</h1>
            <h1>{res.status}</h1>
            <Image src={imagePath+ res.backdrop_path} width={1000} height={1000}
                priority
            />
            <p>{res.overview}</p>
        </div>
    )
}