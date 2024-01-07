export function Book({ book: { volumeInfo: { title, authors, pageCount, categories, imageLinks, language, infoLink } } }) {
    return (
        <div className="rounded-lg m-5 grid p-5 border border-opacity-20 border-slate-400 shadow-sm">
            <div className="text-xs flex gap-2 pb-3">
                <span className="truncate bg-yellow-200 rounded-full font-semibold text-yellow-700 px-4 py-1 leading-none inline-block align-middle">{language}</span>

                {
                    categories ?
                        <span className="truncate max-w-[100px] overflow-hidden bg-purple-300 rounded-full font-semibold text-purple-700 px-4 py-1 leading-none inline-block align-middle">
                            {categories}
                        </span> :
                        <span className="truncate max-w-[100px] overflow-hidden bg-red-300 rounded-full font-semibold text-red-700 px-4 py-1 leading-none inline-block align-middle">
                            (none)
                        </span>
                }
            </div>
            <a className="place-self-center" href={infoLink} target="_blank">
                <img src={imageLinks?.thumbnail} className="shadow-lg rounded-md w-48 object-cover h-60 mb-3 duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" />
            </a>
            <span className="text-xs text-slate-600 font-semibold mb-2">pag. {pageCount}</span>
            <h4 className="truncate text-xs font-bold text-purple-700 uppercase">{title}</h4>
            <p className="truncate text-xs italic text-slate-400">{
                typeof(authors) === "object" ? authors[0] : authors
            }</p>
        </div>
    )
}