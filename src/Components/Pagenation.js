import React from 'react'
import "./Pagenation.css";
const Pagenation = ({postsPerPage, totalPosts, pagenate}) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick = {() => pagenate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Pagenation