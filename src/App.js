import React from 'react';
import './App.css';
import {Pagination} from './components/pagination';

function App() {
  let total = 173, perPage = 10;

  let [current, setCurrent] = React.useState(1);
  const onPageChanged = (page) =>{
    console.log("## page clicked " + page);
    setCurrent(page);
  } 
  
  return (
    <>
      <Pagination
        onPageChanged={onPageChanged}
        current={current}
        total={total}
        perPage={perPage}

      />
    </>
  );
}

export default App;
