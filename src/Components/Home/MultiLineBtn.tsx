import { Box } from '@mui/material'
import {FC} from 'react'
import "../../assets/css/home.scss"
import { ResponsiveTypo } from '../CustomWidget'

interface MultiLineBtnProps {
    children?: any;
    subContent: string;
    isMobile: boolean;
    onClick?: ()=>void;
}
const MultiLineBtn:FC<MultiLineBtnProps> = (props: MultiLineBtnProps) => {
    return (
        <Box className={"flex flex-col justify-start items-start rounded-md px-3 m2:px-5"} 
            sx={{backgroundColor: 'rgb(16,60,120)'}} 
            onClick={props.onClick}>
            <ResponsiveTypo isMobile={props.isMobile} small={true} >{props.subContent}</ResponsiveTypo>
            <ResponsiveTypo isMobile={props.isMobile} >{props.children}</ResponsiveTypo>
        </Box>
    )
}

export default MultiLineBtn