import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';

import Table from './components/Table';
import Detail from './components/Detail';

import getData from './assets/mock.json';

const App: React.FC = () => {
  const [data, setData] = useState(getData.coins);
  const [sortType, setSortType] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

  // get Current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //change page 
  const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
  }


  const  columns: string[] = useMemo(() => ['Name', 'Symbol', 'Logo', 'Current Price', 'Market Cap', 'Changes'], []);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setPostsPerPage(3)
    if (!event.target.value) {
      setData(getData.coins);
    } else {
      const newData = getData.coins.filter(item => item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
      setData(newData);
    }
  }

  const onColumnSort = (index: number = 3) => {
    const key = {
      3: 'price',
      4: 'marketCap',
      5: 'change',
    }[index];

    const newData = getData.coins.sort((a, b) => +a[key] > +b[key] ? 1 : -1 );
  
    if (sortType) {
      newData.reverse();
    }

    setSortType(!sortType);
    setData(newData);
  }

  return (
    <div className="min-h-scree text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Front - End Exam  = ❤</h1>
        </div>
        <div className="mt-6">
          <Table
            currentPosts={currentPosts}
            paginate={paginate}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            onSearch={onSearch} 
            columns={columns} 
            data={data}
            onColumnSort={onColumnSort}
          />
          {/* <Detail /> */}
        </div>
      </main>
    </div>
  )
}

export default App
