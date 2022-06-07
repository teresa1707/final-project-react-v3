import React from 'react'

import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav className="navigation">
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">category</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li>
                            <a href="#">gallery</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
