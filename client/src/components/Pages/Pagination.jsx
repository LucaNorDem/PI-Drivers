import style from "./Pagination.module.css"

const Pagination = ({driversPerPage, totalDrivers, paginate, currentPage}) =>{
    const pageNumbers = [];
    const totalPages = Math.ceil(totalDrivers / driversPerPage);
    const maxButtons = 6;


    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }

    const halfButtons = Math.floor(maxButtons / 2); 
    let startPage = Math.max(1, currentPage - halfButtons);
    let endPage = Math.min(totalPages, currentPage + halfButtons);

    if(currentPage <= halfButtons){
        endPage = Math.min(totalPages, maxButtons);
    }else if(currentPage + halfButtons >= totalPages){
        startPage = Math.max(1, totalPages - maxButtons + 1);
    }


    return (
        <div className={style.btnsContainer} >

            <button className={style.btn} key={"<"} onClick={() => {
                if (currentPage > 1) {
                    paginate(currentPage - 1);
                }
            }}>{"<"}</button>

            {startPage > 1 && <button className={style.btn} key={1} onClick={()=>paginate(1)}  >{1}</button>}
            {startPage > 2 && <span className={style.btnSpan} >...</span>}

            {pageNumbers.slice(startPage - 1, endPage).map(num => (
                <button 
                key={num} 
                onClick={() => paginate(num)} 
                className={`${style.btn} ${num === currentPage ? style.btnActive : ''}`} >{num}</button>
            ))}

            {endPage < totalPages - 1 && <span className={style.btnSpan} >...</span>}
            {endPage < totalPages && <button className={style.btn} key={totalPages} onClick={()=>paginate(totalPages)}  >{totalPages}</button>}

            <button className={style.btn} key={">"} onClick={() => {
                if (currentPage < pageNumbers.length) {
                    paginate(currentPage + 1);
                }
            }}>{">"}</button>
        </div>

    )



}

export default Pagination;