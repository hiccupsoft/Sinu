import * as React from 'react';
import { DialogProps } from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, styled } from '@mui/material';
import { CustomInput } from './CustomWidget';
import "../assets/css/createNode.scss"

interface CreateNodeProps{
}

const ModalButton = styled((props: any)=>(<button {...props} />))`
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    background-color: ${props=>props.backcolor};
    color :${props=>props.color};
    min-width: 200px;
    margin-top: 20px;
    @media only screen and (max-width: 900px) {
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: ${props=>props.backcolor};
        color :${props=>props.color};
        width: 100%;
        margin-top: 20px;
        font-weight: 700;
    }
    @media only screen and (max-width: 770px) {
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 12px;
        background-color: ${props=>props.backcolor};
        color :${props=>props.color};
        width: 100%;
        margin-top: 20px;
        font-weight: 700;
    }
/* color: rgb(16, 60, 120); */
`

const CustomBox = styled((props: any)=>(<Box {...props} />))`
    &::-webkit-scrollbar{
        display: none;
    };
    background-color: rgb(16, 60, 120);
    outline: none;
    border: 0;
`



export function CreateNode(props: CreateNodeProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (open: boolean, scrollType: DialogProps['scroll'])  => {
    setOpen(open);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="px-8 lg:px-36 mt-0 lg:mt-10 pb-10">
        <Box className="px-2 m2:px-4 rounded-t-md" sx={{backgroundColor: 'rgb(16, 60, 120)', color: 'white'}}>
            <Box className="border-b border-customBC1 py-3 pl-1">
                <b>{"Create Your Node"}</b>
            </Box>
        </Box>
        <CustomBox dividers={scroll === 'paper'} sx={{backgroundColor: 'rgb(16, 60, 120)', outline: 'none', border: 0}}>
            <Box className='py-2 m2:py-4 pl-5 m2:pl-8 pr-6 m1:pr-32' sx={{overflow: 'hidden'}}>
                <Box sx={{color: 'white'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </Box>
            </Box>
            <Box className='py-2 m2:py-4 pl-5 m2:pl-8 pr-6 m1:pr-32' sx={{backgroundColor: 'rgb(16, 60, 120)', color: 'white', overflow: 'hidden'}}>
                <Grid container justifyContent="start" alignItems="start" spacing={{md:4, xs:2}}>
                    <Grid item md={6} sm={12}>
                        <Box className="flex flex-col justify-start items-start">
                            <Box color="white" className="mb-2"><b>Node Name</b></Box>
                            <CustomInput placeholder="MyNode" className="w-full m1:w-4/5" />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Box className="flex flex-col justify-start items-start">
                            <Box color="white" className="mb-2"><b>Node Description</b></Box>
                            <CustomInput placeholder="About My Node" className="w-full m1:w-4/5" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className='py-2 m2:py-4 pl-5 m2:pl-8 pr-6 m1:pr-32' sx={{backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
                <Box color="white" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </Box>
            </Box>
            
            <Box className='py-2 m2:py-4 pl-5 m2:pl-8 pr-6 m1:pr-32' sx={{backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
                <Box color="white" sx={{paddingLeft: 5}}>
                    <ul style={{listStyle: 'square'}}>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .</li>
                    </ul>
                </Box>
            </Box>

            <Box className='py-2 m2:py-4 pl-5 m2:pl-8 pr-6 m1:pr-32' sx={{backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden' }}>
                <Box color="white" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                </Box>
            </Box>

            <Box className='py-2 m2:py-4 pl-5 m2:pl-8 pr-6 m1:pr-32' sx={{backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
                <Box className="flex flex-row justify-start items-center">
                    <label className="check-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <Box color="white" >
                    I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est . 
                    </Box>
                </Box>
            </Box>
        </CustomBox>
        
        <Box className="pt-5 rounded-b-md px-3 md:px-6" sx={{paddingBottom:5, backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
            <Box className="flex flex-col m1:flex-row justify-between items-center">
                <Box className="flex flex-col m1:flex-row justify-start items-center  w-full">
                    <ModalButton backcolor="rgb(85,139,189)" color="rgb(4,40,88)" className="mr-0 m1:mr-5" >Approve SINU</ModalButton>
                    <ModalButton color="rgb(85,139,189)" backcolor="rgb(4,40,88)" style={{minWidth: 250}}>Create Ethereum Node</ModalButton>
                </Box>
                <Box className="flex flex-col m1:flex-row justify-end items-center w-full">
                    <ModalButton color="rgb(85,139,189)" backcolor="rgb(4,40,88)" onClick={handleClose} >Cancel</ModalButton>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}