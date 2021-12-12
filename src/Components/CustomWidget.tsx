import { styled } from '@mui/material'
import { FC } from 'react'
import useMobile from '../hooks/useMobile'

export const CustomeBtn = styled((props: any)=>(<button {...props} />))`
    border-radius: 10px;
    padding: ${(props)=>props.mobile ? `5px 12px` : '10px 25px'};
    text-transform: none;
    width: ${(props)=>props.full ? `100%` : 'auto'};
    background-color: ${(props)=>props.isActive ? `rgb(16, 60, 120)` : 'rgb(4, 40, 88)'};
    color: ${(props)=>props.isActive ? `white !important` : 'rgb(85, 139, 189) !important'};
    font-size: ${(props)=>{
        if(!props.small)
            return props.mobile ? `14px` : '20px'
        else return props.mobile ? '10px' : '14px'

    }};
    font-weight: ${(props)=>{
        if(!props.small)
            return props.mobile ? `300` : '500'
        else return props.mobile ? '100' : '200'

    }};
`
export const LightBtn = styled((props: any)=>(<button {...props} />))`
    border-radius: 10px;
    padding: ${(props)=>props.mobile ? `5px 12px` : '10px 25px'};
    /* font-size: ${(props)=>props.mobile ? `10px` : '20px'}; */
    text-transform: none;
    background-color: rgb(85, 139, 189);
    /* color: rgb(16, 60, 120); */
`

// interface ResponsiveTypoProps {
//     small?: string
//     color?: string
//     mobile?: boolean
//     childrend?: any
// }
// export const ResponsiveTypo:FC<ResponsiveTypoProps> = (props: ResponsiveTypoProps) => {
//     const {isMobile} = useMobile()
//     const getFontWeight = () => {
//         if(props.small !== "small")
//             return isMobile ? `400` : '600'
//         else return isMobile ? '200' : '300'
//     }
//     return <span style={{fontWeight: getFontWeight()}} className="text-xs m2:text-sm md:text-lg lg:text-xl ">
//         {props.childrend}
//     </span>
// }

export const ResponsiveTypo = styled((props: any)=>(<span {...props} />))`
    font-size: ${(props)=>{
        if(!props.small)
            return props.mobile ? `18px` : '20px'
        else return props.mobile ? '12px' : '14px'

    }};
    font-weight: ${(props)=>{
        if(!props.small)
            return props.mobile ? `400` : '600'
        else return props.mobile ? '200' : '300'

    }};
    color: ${(props)=>props.color ? props.color : 'white'};
`
export const CustomInput = styled((props: any)=>(<input {...props} />))`
    border: 1px solid rgb(4, 40, 88) !important;
    border-radius: 10px;
    padding: 10px 15px !important;
    color: white;
    /* width: 80%; */
    background-color: rgb(16, 60, 120);
    &:focus-visible{
        border: 1px solid rgb(4, 40, 88) !important;
        outline: none;
        padding: 10px 15px !important;
    }
`

