import { Box, Grid, styled } from '@mui/material'
import _ from 'lodash'
import {FC, useState} from 'react'
import "../../assets/css/home.scss"
import useMobile from '../../hooks/useMobile'
import { CustomeBtn, LightBtn, ResponsiveTypo } from '../CustomWidget'
import CreateNodePopup from './CreateNode'

interface HomeTableProps {
    children?: any;
    onClick?: ()=>void;
}

export const MenuButton = styled((props: any)=>(<Box {...props} />))`
    background-color: ${
        (props)=>props.isActive ? 'rgb(16,60,120)' : 'rgb(4,40,88)'};
    color: ${(props)=>props.isActive ? 'white' : 'rgb(16, 60,120)'};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transform-style: preserve-3d;
    position: relative;
    text-align: center;
    padding: ${(props)=>props.isMobile ? '5px' : '15px'};
    width: 100%;
    height: 100%;
    font-size: ${(props)=>{
        if(!props.small)
            return props.isMobile ? `14px` : '20px'
        else return props.isMobile ? '10px' : '14px'

    }};
    font-weight: ${(props)=>{
        if(!props.small)
            return props.isMobile ? `300` : '500'
        else return props.isMobile ? '100' : '200'

    }};
    &:after{
        content: "";
        position: absolute;
        border-bottom-width: ${(props)=>props.isActive ? '1px' : '0'};
        border-color: rgb(4, 40, 88);
        width: calc(100% - 10px);
        height: calc(100% - 2px);
        left: 5px;
        top: 1px;
    }
`
const mockData = [
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },
    {
        node: "Node1",
        active: "passive",
        reward: "324,297.12",
        feeDue: "due in 29 days"
    },

];

const HomeTable:FC<HomeTableProps> = (props: HomeTableProps) => {
    const {isMobile} = useMobile()
    const [openCreateNode, setOpenCreateNode] = useState(false)
    const renderTable = () => {
        return <Grid container columns={{xs:3, sm: 3, md: 10 }} spacing={2}>
                        <Grid item xs={1} sm={1} md={2} justifyContent="start" alignItems="start" sx={{borderBottom: '1px solid rgb(4,40,88)'}}>
                            <ResponsiveTypo isMobile={isMobile} color="rgb(4, 40, 88)">NODE</ResponsiveTypo>
                        </Grid>
                        <Grid item xs={1} sm={1} md={3} sx={{borderBottom: '1px solid rgb(4,40,88)'}} >
                            <ResponsiveTypo isMobile={isMobile} color="rgb(4, 40, 88)">MY REWARDS</ResponsiveTypo>
                        </Grid>
                        <Grid item xs={1} sm={1} md={3} sx={{borderBottom: '1px solid rgb(4,40,88)'}} >
                            <ResponsiveTypo isMobile={isMobile} color="rgb(4, 40, 88)">FEE DUE</ResponsiveTypo>
                        </Grid>
                        <Grid className="border-0 md:border-b border-customBC1 border-solid" item xs={3} sm={3} md={2} >
                        </Grid>
            {
                _.map(mockData, (each, id)=>{
                    return <>
                        <Grid item xs={1} sm={1} md={2} className="border-b md:border-0 border-customBC1 border-solid">
                            <Box className="flex flex-col justify-end items-start -mt-3 mb-3 ms:mt-0 ms:mb-0">
                            <ResponsiveTypo isMobile={isMobile}>{each.node}</ResponsiveTypo>
                            <ResponsiveTypo isMobile={isMobile} small>{each.active}</ResponsiveTypo>
                            </Box>
                        </Grid>
                        <Grid item xs={1} sm={1} md={3} className="border-b md:border-0 border-customBC1 border-solid" >
                            <ResponsiveTypo isMobile={isMobile}>{each.reward}</ResponsiveTypo>
                        </Grid>
                        <Grid item xs={1} sm={1} md={3} className="border-b md:border-0 border-customBC1 border-solid" >
                            <ResponsiveTypo isMobile={isMobile}>{each.feeDue}</ResponsiveTypo>
                        </Grid>
                        <Grid item xs={3} sm={3} md={2} className="border-b md:border-0 border-customBC1 border-solid" >
                            <LightBtn isMobile={isMobile} className="h-full md:h-auto w-full md:w-full -mt-3 mb-3 ms:mt-0 ms:mb-0" >
                                <ResponsiveTypo isMobile={isMobile}>Pay Fee</ResponsiveTypo>
                            </LightBtn>
                        </Grid>
                    </>
                })
            }

        </Grid>
    }
    return (
        <Box className={"flex flex-col justify-center items-center mt-10 pb-10 sm:pb-20"} >
            <Grid container columns={{xs:3, sm: 3, md: 9 }} spacing={{xs:1, sm: 1, md: 1 }}>
                <Grid item xs={1} sm={1} md={2} >
                    <MenuButton isMobile={isMobile} isActive={true} >My Nodes</MenuButton>
                </Grid>
                <Grid item xs={1} sm={1} md={2} >
                    <MenuButton isMobile={isMobile}>All Nodes</MenuButton>
                </Grid>
                <Grid item xs={1} sm={1} md={2} >
                    <MenuButton isMobile={isMobile}>NFTs</MenuButton>
                </Grid>
            </Grid>
            <Box className="rounded-b-md w-full px-5 py-10 " sx={{backgroundColor: "rgb(16,60,120)"}}>
                <Grid container columns={{xs:1, sm: 1, md: 4 }} spacing={3} className="mt-5 px-2 flex-row-reverse" >
                    <Grid item xs={1} sm={1} md={3} order={{xs:3, sm: 3, md: 1}}>
                        {renderTable()}
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} order={{xs:1, sm: 1, md: 3}}>
                        <Grid container columns={{xs:2, sm: 2, md: 1 }} spacing={{xs:3, sm:3, md:2 }}>
                            <Grid item xs={1} sm={1} md={1} >
                                <CustomeBtn isMobile={isMobile} full onClick={()=>setOpenCreateNode(true)}>Create your Node</CustomeBtn>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} >
                                <CustomeBtn isMobile={isMobile} full>Pay All Node Fees</CustomeBtn>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <CreateNodePopup onClose={()=>setOpenCreateNode(false)} open={openCreateNode} />
        </Box>
    )
}

export default HomeTable