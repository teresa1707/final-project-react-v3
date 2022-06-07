import React from 'react'
import { Grid } from '@mui/material'
import 'styles/Main.scss'
import 'styles/grid.scss'
import { MainArticlesItem } from './MainArticlesItem'
import ArticlesArray from 'utils/ArticlesArray'

export const MainArticlesSection = () => {
    return (
        <>
            <Grid container>
                {ArticlesArray.map(
                    ({
                        id,
                        image,
                        link,
                        categoryIcon,
                        title,
                        text,
                        date,
                        author,
                    }) => (
                        <Grid item xs={12} sm={8} key={id} className="gridItem">
                            <MainArticlesItem
                                image={image}
                                link={link}
                                categoryIcon={categoryIcon}
                                title={title}
                                text={text}
                                date={date}
                                author={author}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
