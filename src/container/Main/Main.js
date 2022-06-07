import React from 'react'
import 'styles/Main.scss'
import { MainDarkSection } from 'components/MainDarkSection/MainDarkSection'
import { MainSection } from 'components/MainSection/MainSection'

export const Main = () => {
    return (
        <>
            SLIDER
            <div className="wrapper-dark">
                <MainDarkSection />
            </div>
            <div className="wrapper">
                <MainSection />
            </div>
        </>
    )
}
