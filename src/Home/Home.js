import React, { Fragment, useState, useLayoutEffect } from 'react'
import './Home.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeroDesk from '../images/image-hero-desktop.png'
import HeroMob from '../images/image-hero-mobile.png'

import ClientAudi from '../images/client-audiophile.svg'
import ClientData from '../images/client-databiz.svg'
import ClientMaker from '../images/client-maker.svg'
import ClientMeet from '../images/client-meet.svg'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Home = () => {
    const [width] = useWindowSize();
    return (
      <Fragment>
          <div className='Home-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={6}>
                    <Grid item md={6} xs={12} sm={12} order={{xs:1, sm: 1, md: 2 }}>
                            <div className='HeroImage'>
                                {width > 900  ?
                                    <img  className="HeroDesk"
                                    src={HeroDesk} alt="hero"/>
                                    :
                                    <img  className="HeroMob"
                                    src={HeroMob} alt="hero"/>
                                }
                            </div>
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} order={{ xs:2, sm: 2, md: 1 }}>
                        <div className='HeroText'>
                                <h1>Make <br/> remote work</h1>
                                <h4>Get your team in sync, no mater your location. Streamline processes, create team rituals, and watch productivity soar.</h4>
                                <button>Learn more</button>
                                <div className='client'>
                                    <img src={ClientAudi} alt="hero"/>
                                    <img src={ClientData} alt="hero"/>
                                    <img src={ClientMeet} alt="hero"/>
                                    <img src={ClientMaker} alt="hero"/>
                                </div>
                        </div>
                    </Grid>
                </Grid>
                </Box>
              
          </div>
      </Fragment>
    )
  }
  
  export default Home;