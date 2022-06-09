import React from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'

import CssBaseline from '@mui/material/CssBaseline'

import SimpleSlider from 'container/Slider/Slider'

export const App = () => {
    return (
        <>
            <CssBaseline />

            <Header />
            <SimpleSlider />
            <Main />
            <Footer />
        </>
    )
}
