import React from 'react'
import { Grid } from '@mui/material'
import 'styles/Main.scss'
import 'styles/grid.scss'
import './useful.scss'

import like from 'Assets/red-heart23.png'

export const MainArticlesItem = ({
    image,
    link,
    categoryIcon,
    title,
    text,
    date,
    author,
}) => {
    return (
        <>
            <Grid container className="col-style">
                <Grid
                    item
                    xs={12}
                    md={5}
                    className="title3-photo title3-container"
                >
                    <figure className="snip0016">
                        <img src={image} alt="sample41" />
                        <figcaption>
                            <h2 className="title3">{title}</h2>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p>read more...</p>
                            </a>
                        </figcaption>
                    </figure>
                </Grid>

                <Grid item xs={12} md={7} className="title3-container">
                    <div className="inline">
                        <button type="button" title="history" className="tag">
                            <img src={categoryIcon} alt="" />
                        </button>
                    </div>
                    <h2 className="title3-card">{title}</h2>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                    <button type="button" title="Like" className="iconLike">
                        <img src={like} alt="" />
                    </button>
                    {date} {author}
                </Grid>
            </Grid>
        </>
    )
}
