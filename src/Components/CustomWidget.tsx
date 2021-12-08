import { Button, styled } from '@mui/material'

export const CustomeBtn = styled((props: any)=>(<button {...props} />))`
    border-radius: 6px;
    padding: ${(props)=>props.isMobile ? `5px 12px` : '10px 25px'};
    text-transform: none;
    width: ${(props)=>props.full ? `100%` : 'auto'};
    background-color: ${(props)=>props.isActive ? `rgb(16, 60, 120)` : 'rgb(4, 40, 88)'};
    color: ${(props)=>props.isActive ? `white !important` : 'rgb(85, 139, 189) !important'};
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
`
export const LightBtn = styled((props: any)=>(<button {...props} />))`
    border-radius: 6px;
    padding: ${(props)=>props.isMobile ? `5px 12px` : '10px 25px'};
    /* font-size: ${(props)=>props.isMobile ? `10px` : '20px'}; */
    text-transform: none;
    background-color: rgb(85, 139, 189);
    /* color: rgb(16, 60, 120); */
`

export const ResponsiveTypo = styled((props: any)=>(<span {...props} />))`
    font-size: ${(props)=>{
        if(!props.small)
            return props.isMobile ? `18px` : '20px'
        else return props.isMobile ? '12px' : '14px'

    }};
    font-weight: ${(props)=>{
        if(!props.small)
            return props.isMobile ? `400` : '600'
        else return props.isMobile ? '200' : '300'

    }};
    color: ${(props)=>props.color ? props.color : 'white'};
`
export const CustomInput = styled((props: any)=>(<input {...props} />))`
    border: 1px solid rgb(4, 40, 88) !important;
    border-radius: 6px;
    padding: 10px 15px !important;
    color: white;
    width: 300px;
    background-color: rgb(16, 60, 120);
    &:focus-visible{
        border: 1px solid rgb(4, 40, 88) !important;
        outline: none;
        padding: 10px 15px !important;
    }
`

