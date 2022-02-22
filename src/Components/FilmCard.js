export default function FilmCard(props){
    return(
        <div className="mt-2">
            <h1 className="font-black">{props.title}</h1>
            <p>{props.crawl}</p>
        </div>
    )
}