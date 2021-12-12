import Box from '@mui/material/Box'
import {FC} from 'react'
import "../../assets/css/home.scss"
import {CreateNode as CreateNodeComponent}  from '../../Components/CreateNode'
import Topbar from "../../Components/Topbar"

const CreateNode:FC = () => {
    return (
        <Box className="bg min-h-screen">
            <Topbar />
            <CreateNodeComponent />
        </Box>
    )
}

export default CreateNode;