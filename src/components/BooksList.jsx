import * as data from '../API/apiPrototype.json';
import { Book } from './Book';

export function BookList() {

    const { items } = data;

    return (
        <>
            <h1 className='text-4xl font-semibold text-center p-10'>Booklist of <span className='text-purple-800 underline'>Archaeology</span></h1>

            <div className="grid grid-cols-1 max-w-max place-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ease-in-out duration-150 transition-all">
                {
                    items.map(book => (
                        <Book
                            key={book.id}
                            book={book}
                        />
                    ))
                }
            </div>
        </>
    )
}