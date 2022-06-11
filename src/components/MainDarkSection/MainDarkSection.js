import React from 'react'
import ImgHistory from 'Assets/rome25.png'
import ImgArt from 'Assets/theater30.png'
import ImgScience from 'Assets/science-icon-35.png'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import 'styles/Main.scss'
import 'styles/grid.scss'

export const MainDarkSection = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={4} className="gridItem">
                        <div className="article-1">
                            <div className="sec1-title">
                                <h3>
                                    <a href="#">
                                        <img src={ImgHistory} alt="" />
                                        History
                                    </a>
                                </h3>
                            </div>
                            <div className="p-dark text-section">
                                Ipsam id ducimus ullam unde et voluptatem beatae
                                aut, ratione eum cumque ...
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} className="gridItem">
                        <div className="article-2">
                            <div className="sec1-title">
                                <h3>
                                    <a href="">
                                        <img src={ImgScience} alt="" />
                                        Science
                                    </a>
                                </h3>
                            </div>
                            <div className="p-dark text-section">
                                {' '}
                                Reprehenderit modi soluta ipsa eius quibusdam
                                laboriosam officia nemo recusandae ...
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} className="gridItem">
                        <div className="article-3">
                            <div className="sec1-title">
                                <h3>
                                    <a href="">
                                        <img src={ImgArt} alt="" />
                                        Art
                                    </a>
                                </h3>
                            </div>
                            <div className="p-dark text-section">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit modi soluta ipsa
                                eius quibusdam ...
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
