import React from 'react'

import 'styles/Main.scss'
import 'styles/grid.scss'
import { MainArticlesItem } from './MainArticlesItem'
import ArticlesArray from 'utils/ArticlesArray'

export const MainArticlesSection = () => {
    return (
        <>
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
                    <MainArticlesItem
                        id={id}
                        link={link}
                        image={image}
                        categoryIcon={categoryIcon}
                        title={title}
                        text={text}
                        date={date}
                        author={author}
                    />
                )
            )}
        </>
    )
}
