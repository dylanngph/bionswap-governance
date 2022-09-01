import React from 'react'
import {
    Box,
    Container,
    styled,
    useMediaQuery
} from '@mui/material'
import HeroSection from './Sections/Hero/HeroSection';

const Homepage = () => {
  const isMobile = useMediaQuery('(max-width:700px)');
  const isTablet = useMediaQuery('(max-width:1050px)');

  return (
    <Page>
        <HeroSection isMobile={isMobile} isTablet={isTablet} />
    </Page>
  )
}

const Page = styled(Box)`
    min-height: 100vh;
    background-color: ${prop => prop.theme.palette.background.default};
    color: ${prop => prop.theme.palette.text.primary}
`


export default Homepage