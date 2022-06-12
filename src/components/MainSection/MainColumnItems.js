import React from 'react'
import Grid from '@mui/material/Grid'
import 'styles/Main.scss'
import 'styles/grid.scss'

import FbIcon from 'Assets/facebook-24-blue.png'
import twitterIcon from 'Assets/twitter-24-blue.png'
import pinterestIcon from 'Assets/pinterest-24-blue.png'
import linkedinIcon from 'Assets/linkedin-3-24-blue.png'

export const MainColumnItems = () => {
    return (
        <>
            <Grid container className="flex-col">
                <Grid item className="col-style" mb={4}>
                    {' '}
                    <div className="title2">inspiration</div>
                    <div className="text2 italic">
                        <p>
                            "Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Id, illum vero, atque asperiores quae, sint
                            nulla aspernatur deserunt eveniet vel eligendi
                            doloremque. Sequi quisquam, velit blanditiis animi
                            tempora minima esse!"
                        </p>
                        <p>Author</p>
                    </div>
                </Grid>
                <Grid item className="col-style" mb={4}>
                    <div className="title2">Our mission</div>
                    <div className="text2">
                        <p>
                            Fugiat possimus perferendis odio laudantium error
                            vero maxime quasi architecto distinctio eaque
                            aliquid ut excepturi ea eius, illum labore. Quo,
                            velit et?
                        </p>
                    </div>
                </Grid>
                <Grid item className="col-style" mb={4}>
                    <div className="title2">Follow us</div>
                    <div className="text2">
                        <p>
                            We are here :
                            <a href={FbIcon}>
                                <img src={FbIcon} alt="" />
                            </a>
                            <a href={twitterIcon}>
                                <img src={twitterIcon} alt="" />
                            </a>
                            <a href={pinterestIcon}>
                                <img src={pinterestIcon} alt="" />
                            </a>
                            <a href={linkedinIcon}>
                                <img src={linkedinIcon} alt="" />
                            </a>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
