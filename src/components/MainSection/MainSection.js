import React from 'react'
import 'styles/Main.scss'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'
import { MainColumnItems } from './MainColumnItems'
import { MainArticlesSection } from './MainArticlesSection'

export const MainSection = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} className="title">
                        Welcome to my website created with React
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MainColumnItems />
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <MainArticlesSection />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
