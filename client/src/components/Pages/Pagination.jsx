

const Pagination = ({driversPerPage, totalDrivers, paginate, currentPage}) =>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalDrivers / driversPerPage); i++){
        pageNumbers.push(i);
    }

   

    return (
        <div>

            <button key={"<"} onClick={() => {
                if (currentPage > 1) {
                    paginate(currentPage - 1);
                }
            }}>{"<"}</button>
            {pageNumbers.map(num => (
                <button key={num} onClick={() => paginate(num)}>{num}</button>
            ))}
            <button key={">"} onClick={() => {
                if (currentPage < pageNumbers.length) {
                    paginate(currentPage + 1);
                }
            }}>{">"}</button>
        </div>

    )



}

export default Pagination;