import React from 'react'

export default function Navigation (props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div className="tabs is-centered">
            <ul className='nav-tabs '>
                {tabs.map((tab) => ( 
                    <li className={props.currentPage === tab ? "nav-item is-active" : "nav-item"} key={tab}>
                      <a href={"#" + tab.toLowerCase()}
                      onClick={() => props.handlePageChange(tab)}
                      className={props.currentPage === tab ? "nav-link active" : "nav-link"} >
                    {tab}
                      </a>  
                    </li>
                    ))}
            </ul>
        </div>
    )
}