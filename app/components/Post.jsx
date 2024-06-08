export default function Post({id,title,content,authorName}){
    return(
        <div className="flex flex-col border border-zinc-800 p-3 my-3">
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}