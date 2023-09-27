export default function Pagination({ page, handlePageChange }: { page: number, handlePageChange: (page: number) => void }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item mx-2">
                    <button className={`btn btn-dark ${(page === 1 ? " disabled" : "")}`} aria-label="Previous" onClick={() => handlePageChange(page - 1)} >
                        <span aria-hidden="true">&laquo; Previous</span>
                    </button>
                </li>
                <li className="page-item mx-2">
                    <button className="btn btn-dark" aria-label="Next" onClick={() => handlePageChange(page + 1)}>
                        <span aria-hidden="true">Next &raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}