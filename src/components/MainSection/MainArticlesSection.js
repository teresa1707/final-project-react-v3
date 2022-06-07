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
                        link,
                        image,
                        categoryIcon,
                        title,
                        text,
                        date,
                        author,
                    }) => (
                        <Grid item xs={12} sm={8} key={id}>
                            <MainArticlesItem
                                link={link}
                                image={image}
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
