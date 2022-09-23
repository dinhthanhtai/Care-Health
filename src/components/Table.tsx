import React from "react";

import Pagination from "./Pagination";

interface IProps{
    columns: string[],
    data: any,
    postsPerPage: number;
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onColumnSort: (index: number) => void;
    paginate: (pageNumber: number) => void;
    currentPage: number,
    currentPosts: any,
    onCoinDetail: (uuid: string) => void
}

const Table: React.FC<IProps> = ({ columns, data, onSearch, onColumnSort, currentPage, paginate, postsPerPage, currentPosts, onCoinDetail }) => {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="pl-2 pb-4 bg-white dark:bg-gray-900">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input onChange={onSearch} type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search htmlFor items"/>
                </div>
            </div>  
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            columns.map((column, index) => (
                                <th key={index} scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        {column}
                                        {
                                            (index === 3 || index === 4 || index === 5) && (
                                                <React.Fragment>
                                                    <div onClick={() => onColumnSort(index)} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        }
                                    </div>
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        currentPosts.map((value: any, index: number) => {
                            const { name, symbol, iconUrl, price, marketCap, change, uuid } = value;
                            return (    
                                <tr onClick={() => onCoinDetail(uuid)} key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {symbol}
                                    </td>
                                    <td className="py-4 px-6">
                                        <img src={iconUrl} className='w-4 h-4' />
                                    </td>
                                    <td className="py-4 px-6">
                                        {`$ ${price}`}
                                    </td>
                                    <td className="py-4 px-6">
                                        {marketCap}
                                    </td>
                                    <td className="py-4 px-6">
                                        {change}
                                    </td>
                                </tr>   
                            )
                        })
                    }
                </tbody>
            </table>
            {
                postsPerPage < data.length && (
                    <Pagination 
                        postsPerPage={postsPerPage} 
                        totalPosts={data.length} 
                        paginate={paginate} 
                        currentPage={currentPage}
                    />
                )
            }
        </div>
    );
}

export default Table;