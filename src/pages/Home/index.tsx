import Box from '@mui/material/Box'
import {FC} from 'react'
import "../../assets/css/home.scss"
import HomeComponent from '../../Components/Home'
import Topbar from "../../Components/Topbar"

const Home:FC = () => {
    return (
        <Box className="bg min-h-screen">
            <Topbar />
            <HomeComponent />
        </Box>
    )
}

export default Home;