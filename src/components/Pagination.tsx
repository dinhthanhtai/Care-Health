interface IProps {
    postsPerPage: number,
    totalPosts: number,
    paginate: (pageNumber: number) => void,
    currentPage: number
}

const Pagination: React.FC<IProps> = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const onPrevious = () => {
        currentPage > 1 && paginate(currentPage - 1)
    }

    const onNext = () => {
        currentPage < totalPosts && paginate(currentPage + 1)
    }

    const lessThan5 = (arr: number[]) => {
        return (
            <>
                {
                    arr.map(number => 
                        {
                            return currentPage === number ? (
                                <li key={number}>
                                    <a aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"> {number} </a>
                                </li> 
                            ) : (
                                <li key={number}>
                                    <a onClick={() => paginate(number)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
                                </li>
                            );
                        }
                    )
                }
            </>
        )
      
    }

    const moreThan5 = (arr: number[]) => {
        return (
            <>
                {
                    (currentPage <= totalPosts - 3) ? (
                        arr.slice(currentPage === totalPosts - 3 ? currentPage - 2 : currentPage - 1 , currentPage === totalPosts - 3 ? currentPage  : currentPage + 2).map(number => 
                            {
                                return currentPage === number ? (
                                    <li key={number}>
                                        <a aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"> {number} </a>
                                    </li> 
                                ) : (
                                    <li key={number}>
                                        <a onClick={() => paginate(number)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
                                    </li>
                                );
                            }
                        )
                    ) : (
                        <li>
                            <a onClick={() => paginate(1)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                    )
                }
                <li>
                    <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                </li>
                {
                    (currentPage >= totalPosts - 3) ? (
                        arr.slice(totalPosts - 3, totalPosts).map(number => 
                            {
                                return currentPage === number ? (
                                    <li>
                                        <a href="#" aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"> {number} </a>
                                    </li> 
                                ) : (
                                    <li>
                                        <a onClick={() => paginate(number)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
                                    </li>
                                );
                            }
                        )
                    ) : (
                        <li>
                            <a onClick={() => paginate(totalPosts)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{totalPosts}</a>
                        </li>
                    )
                }
            </>
        )
    }

    return (
        <nav className="flex justify-between items-center pt-4 pb-2 px-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing 
                <span className="font-semibold text-gray-900 dark:text-white">
                    {` ${currentPage} - ${postsPerPage}`}
                </span> of 
                <span className="font-semibold text-gray-900 dark:text-white">{` ${totalPosts}`}</span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <a onClick={onPrevious} className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                </li>
                {
                    pageNumbers.length <= 5 ? (
                        lessThan5(pageNumbers)
                    ) : (
                        moreThan5(pageNumbers)
                    )
                }                  
                <li>
                    <a onClick={onNext} className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;