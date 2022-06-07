import React from 'react'
import { Grid } from '@mui/material'
import 'styles/Main.scss'
import 'styles/grid.scss'
import like from 'Assets/Heart-white1-23.png'

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
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    className="title3-photo title3-container"
                >
                    <a href="#" target="_blank">
                        <img src={image} alt="" />
                    </a>
                </Grid>

                <Grid item xs={12} sm={7} className="title3-container gridItem">
                    <div className="inline">
                        <button type="button" title="history" className="tag">
                            <img src={categoryIcon} alt="" />
                        </button>

                        <div className="title3 ">{title}</div>
                    </div>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                    <button type="button" title="Like" className="iconLike">
                        <img src={like} alt="" />
                    </button>{' '}
                    {date} {author}
                </Grid>
            </Grid>
        </>
    )
}
