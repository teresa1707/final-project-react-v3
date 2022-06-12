import React from 'react'

import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu" id="menu">
                <nav className="navigation">
                    <ul>
                        <li>
                            <a className="nav-item" href="#menu">
                                home
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#menu">
                                category
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#menu">
                                blog
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#menu">
                                gallery
                            </a>
                        </li>
                        <li>
                            <a className="nav-item" href="#menu">
                                contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
