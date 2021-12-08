import Box from '@mui/material/Box'
import {FC} from 'react'
import useMobile from '../hooks/useMobile'
import bg from "../assets/images/logo.png"
import { CustomeBtn, ResponsiveTypo } from './CustomWidget'

const Topbar:FC = () => {
    const {isMobile} = useMobile()
    const web = () => {
        return (<Box className="px-24 py-12 flex flex-row justify-between items-center">
            <img src={bg} width="340" />
            <CustomeBtn style={{width: 'auto !important'}} isMobile={isMobile}><ResponsiveTypo isMobile={isMobile}>0x40ad....a06s</ResponsiveTypo></CustomeBtn>
        </Box>)
    }

    const mobile = () => {
        return (<Box className="px-8 py-4 flex flex-row justify-between items-center ">
            <img src={bg} width="95" />
            <CustomeBtn style={{width: 'auto !important'}} isMobile={isMobile} ><ResponsiveTypo isMobile={isMobile}>0x40ad....a06s</ResponsiveTypo></CustomeBtn>
        </Box>);
    }
    return isMobile ? mobile() : web()
}

export default Topbar