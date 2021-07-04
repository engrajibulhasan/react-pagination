import React, { useEffect, useState } from 'react';
import subCategorJSON from './sub_category_list.json';
import ReactPaginate from 'react-paginate';
const Subcategory = (props) => {
    const {id, category}=props.category;
    
    //Sub Category State Management (update from JSON)
    const [subCategories,setSubCategories]=useState(subCategorJSON.filter(mainData=> mainData.category===category)?subCategorJSON.filter(mainData=> mainData.category===category):[]);
    //Mount and Unmount management
    console.log(subCategories);


    //Pagination Settings
    const [pageNumber,setPageNumber]= useState(0);
    const resultPerPage=3;
    const pageVisited=pageNumber*resultPerPage;

     //users.slice(0,10)
    const displayResults=subCategories.slice(pageVisited,pageVisited+resultPerPage).map((subcategory,index)=>{
        return(
            <div key={subcategory.id} className="single-item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="inner-box">
                <h3>{subcategory.sub_category}</h3>
                </div>
            
            </div>
        )
    })

    //How many page in the result
    const pageCount=Math.ceil(subCategories.length/resultPerPage);
    const handlePageChange=({selected})=>{
        setPageNumber(selected);
    }




    return (
        <>
        <div className="row item-group">
            {displayResults}
        </div>
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
        </>
    );
};

export default Subcategory;