import React, { useMemo, useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import { getCoinRanking } from './api';
import Table from './components/Table';
import { ICoinDetail } from './Interface/CoinDetail';

type key = 'price' | 'marketCap' | 'change';

const App: React.FC = () => {
  const navigate = useNavigate();

  const [dataSearch, setDataSearch] = useState<Array<ICoinDetail>>([]);
  const [data, setData] = useState<Array<ICoinDetail>>([]);
  const [sortType, setSortType] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // get Current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const fetchData = async () => {
    const response = await getCoinRanking();

    if (response) {
      setData(response.coins);
      setDataSearch(response.coins);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
  }

  const columns: string[] = useMemo(() => ['Name', 'Symbol', 'Logo', 'Current Price', 'Market Cap', 'Changes'], []);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    if (!event.target.value) {
      fetchData();
    } else {
      const newData = dataSearch.filter(item => item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
      setData(newData);
    }
  }

  const onColumnSort = (index: number) => {
    let key: key;

    switch(index) {
      case 4: key = 'marketCap'; break;
      case 5: key = 'change'; break;
      default: key = 'price'; break;
    }

    const newData = dataSearch.sort((a: ICoinDetail, b: ICoinDetail) => {
        return +a[key] > +b[key] ? 1 : -1;
    } );
  
    if (sortType) {
      newData.reverse();
    }

    setSortType(!sortType);
    setData(newData);
  }

  const onCoinDetail = (uuid: string) => {
    navigate(`/coin/${uuid}`)
  }

  return (
    <div className="min-h-scree text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className="text-xl font-semibold">Front - End Testing = ❤</h1>
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
            onCoinDetail={onCoinDetail}
          />
        </div>
      </main>
    </div>
  )
}

export default App
