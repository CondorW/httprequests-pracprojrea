export default function FilmCard(props){
    return(
        <div className="mt-2 bg-slate-50 mx-2 rounded px-2 py-2">
            <h1 className="font-black">{props.title}</h1>
            <p>{props.crawl}</p>
        </div>
    )
}