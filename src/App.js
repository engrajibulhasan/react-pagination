import JsonData from './main_data.json';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import './App.css';
import Subcategory from './Subcategory';

function App() {
  const [categories,setCategories]= useState(JsonData.slice(0,900));
  const [pageNumber,setPageNumber]= useState(0);
  const resultPerPage=1;
  const pageVisited=pageNumber*resultPerPage;

  //users.slice(0,10)
  const displayResults=categories.slice(pageVisited,pageVisited+resultPerPage).map((category,index)=>{
    return(
        <div className="items container">
          <h3>category: {categories.category}</h3>
          <hr/>
          <Subcategory category={category}/>
        </div>
    )
  })

  //console.log(users);
  //How many page in the result
  const pageCount=Math.ceil(categories.length/resultPerPage);
  const handlePageChange=({selected})=>{
    setPageNumber(selected);
  }


  return (
    <div className="App">
      {displayResults}
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttns"}
        nextLinkClassName={"nextBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
