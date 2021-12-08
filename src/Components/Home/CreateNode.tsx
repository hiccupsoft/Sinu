import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, styled } from '@mui/material';
import { CustomInput } from '../CustomWidget';
import "../../assets/css/createNode.scss"

interface CreateNodeProps{
    open: boolean;
    onClose: ()=>void;
}

const ModalButton = styled((props: any)=>(<button {...props} />))`
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: ${props=>props.backcolor};
    color :${props=>props.color};
    min-width: 200px;
    @media only screen and (max-width: 770px) {
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 12px;
        background-color: ${props=>props.backcolor};
        color :${props=>props.color};
        min-width: 100px;
    }
/* color: rgb(16, 60, 120); */
`

const CustomDialogContent = styled((props: any)=>(<DialogContent {...props} />))`
    &::-webkit-scrollbar{
        display: none;
    };
    background-color: rgb(16, 60, 120);
    outline: none;
    border: 0;
`



export default function CreateNodePopup(props: CreateNodeProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  React.useEffect(()=>{
    //   if(props.open !== open) {
        handleClickOpen(props.open, "paper")
    //   }
  },[props.open])

  const handleClickOpen = (open: boolean, scrollType: DialogProps['scroll'])  => {
    setOpen(open);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{backgroundColor: 'rgb(16, 60, 120)', color: 'white'}}>
            <Box className="border-b border-customBC1 pb-3">
                {"Create Your Node"}
            </Box>
        </DialogTitle>
        <CustomDialogContent dividers={scroll === 'paper'} sx={{backgroundColor: 'rgb(16, 60, 120)', outline: 'none', border: 0}}>
            <DialogContent sx={{paddingLeft: 5, paddingRight: 20, overflow: 'hidden'}}>
                <DialogContentText sx={{color: 'white'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </DialogContentText>
            </DialogContent>
            <DialogContent sx={{paddingLeft: 5, paddingRight: 20, backgroundColor: 'rgb(16, 60, 120)', color: 'white', overflow: 'hidden'}}>
                <Grid container justifyContent="start" alignItems="start" spacing={4}>
                    <Grid item md={6} >
                        <Box className="flex flex-col justify-start items-start">
                            <Box color="white">Node Name</Box>
                            <CustomInput placeholder="MyNode" />
                        </Box>
                    </Grid>
                    <Grid item md={6} >
                        <Box className="flex flex-col justify-start items-start">
                            <Box color="white">Node Description</Box>
                            <CustomInput placeholder="About My Node" />
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogContent sx={{paddingLeft: 5, paddingRight: 20, backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
                <DialogContentText color="white" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </DialogContentText>
            </DialogContent>
            
            <DialogContent sx={{paddingLeft: 5, paddingRight: 20, backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
                <Box color="white" sx={{paddingLeft: 5}}>
                    <ul style={{listStyle: 'square'}}>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .</li>
                    </ul>
                </Box>
            </DialogContent>

            <DialogContent sx={{paddingLeft: 5, paddingRight: 20, backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden' }}>
                <DialogContentText color="white" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                </DialogContentText>
            </DialogContent>

            <DialogContent sx={{paddingLeft: 5, paddingRight: 20, backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
                <Box className="flex flex-row justify-start items-center">
                <label className="check-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <DialogContentText color="white" >
                I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est . 
                </DialogContentText>
                </Box>
            </DialogContent>
        </CustomDialogContent>
        
        <DialogContent sx={{paddingLeft: 5, paddingRight: 5,paddingBottom:5, backgroundColor: 'rgb(16, 60, 120)', overflow: 'hidden'}}>
            <Box className="flex flex-row justify-between items-center">
                <Box className="flex flex-row justify-between items-center">
                    <ModalButton backcolor="rgb(85,139,189)" color="rgb(4,40,88)" className="mr-5" >Approve SINU</ModalButton>
                    <ModalButton color="rgb(85,139,189)" backcolor="rgb(4,40,88)">Create Ethereum Node</ModalButton>
                </Box>
                <Box className="flex flex-row justify-end items-center">
                    <ModalButton color="rgb(85,139,189)" backcolor="rgb(4,40,88)" onClick={handleClose}>Cancel</ModalButton>
                </Box>
            </Box>
        </DialogContent>
      </Dialog>
  );
}