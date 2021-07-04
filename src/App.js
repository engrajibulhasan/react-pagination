import JsonData from './main_data.json';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import './App.css';
import Subcategory from './Subcategory';

function App() {
  //State Management and fake data collection
  const [categories,setCategories]= useState(JsonData);
  const [pageNumber,setPageNumber]= useState(0);
  const resultPerPage=1;
  const pageVisited=pageNumber*resultPerPage;

  //users.slice(0,10)
  const displayResults=categories.slice(pageVisited,pageVisited+resultPerPage).map((category,index)=>{
    return(
        <div key={category.id} className="items container">
          <h3>category: {category.category}</h3>
          <hr/>
          <Subcategory key={category.id} category={category}/>
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
        previousLabel={"<"}
        nextLabel={">"}
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
