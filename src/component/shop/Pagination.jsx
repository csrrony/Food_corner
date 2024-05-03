import React from 'react'

const Pagination = ({productPerPage,totalProducts,paginate,currentPage}) => {

    const pageNumber=[];
    for (let i = 0; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumber.push(i);
        
    }
  return (
    <div>
        <ul className='flex gap-5'>
        <li key={number}>
            <button onClick={() => {
                if (currentPage < pageNumber.length) {
                    paginate(currentPage - 1)
                }
            }} className=' w-5 h-5 rounded-full bg-white shadow-xl'>l</button>
        </li>
            {
                pageNumber.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)} className=' w-5 h-5 rounded-full bg-white shadow-xl'>{number}</button>
                    </li>
                ))
            }
            <li key={number}>
            <button onClick={() => {
                if (currentPage > pageNumber.length) {
                    paginate(currentPage + 1)
                }
            }} className=' w-5 h-5 rounded-full bg-white shadow-xl'>r</button>
        </li>
        </ul>
    </div>
  )
}

export default Pagination