import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'
import "../../assets/css/home.scss"
import useMobile from '../../hooks/useMobile'
import { LightBtn, ResponsiveTypo } from '../CustomWidget'
import HomeTable from './HomeTable'
import MultiLineBtn from './MultiLineBtn'

const HomeComponent: FC = () => {
    const {isMobile} = useMobile()
    // const web = () => {
    //     return(
    //         <Grid container>

    //         </Grid>
    //     )
    // }

    // const mobile = () => {
    //     return(

    //     )
    // }
    return (
        <Box className="px-8 m2:px-24 mt-10">
            <Grid container columns={{xs:1, sm: 1, md: 12 }} spacing={{xs:2, sm: 2, md: 3 }}>
                <Grid item xs={1} sm={1} md={7}>
                    <Grid container
                        spacing={{xs:4, sm: 4, md: 2 }}
                        columns={{xs:12, sm: 12, md: 12 }}>
                        <Grid item xs={7} sm={7} md={5} >
                            <MultiLineBtn subContent="My Nodes" mobile={isMobile}>5 out of 100 max</MultiLineBtn>
                        </Grid>
                        <Grid item xs={5} sm={5} md={4} >
                            <LightBtn className="w-full h-full" mobile={isMobile}><ResponsiveTypo mobile={isMobile} color="rgb(16, 60, 120)">Create Node</ResponsiveTypo></LightBtn>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1} md={5}>
                    <Grid columns={{ xs:4, sm: 4, md: 5 }}
                        container
                        spacing={{xs:4, sm: 4, md: 3 }}>
                        <Grid item xs={3} sm={3} md={3} sx={{width: '100%'}} >
                            <MultiLineBtn subContent="My Node Rewards" mobile={isMobile}>16,233.37 SINU</MultiLineBtn>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2}  justifyContent="center">
                            <LightBtn  className="w-full h-full" mobile={isMobile}><ResponsiveTypo mobile={isMobile} color="rgb(16, 60, 120)">Claim</ResponsiveTypo></LightBtn>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <HomeTable />
        </Box>
    )
}

export default HomeComponent