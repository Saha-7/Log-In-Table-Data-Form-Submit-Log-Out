import React from "react";

const Pagination =({totalPosts, postPerPage, setCurrentPage, currentPage})=>{
  let pages = [];

  for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {pages.map((page)=>(
        <button
          key={page}
          onClick={()=>setCurrentPage(page)}
          className={`mx-1 p-2 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;