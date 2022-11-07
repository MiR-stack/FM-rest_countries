import {BiMoon,BiSun} from 'react-icons/bi'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.dark?props.theme.colors.darkBg:props.theme.colors.lightBg};

`

const Appbar = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background-color:${props => props.theme.dark?props.theme.colors.darkEl:props.theme.colors.lightEl} ;
box-shadow: ${props => props.theme.css.shadow};
`

const ModeButton = styled.button`
display: flex;
align-items: center;
gap:5px;
border:none;
background-color: transparent;
outline: none;
cursor: pointer;

@media(max-width:500px){
      font-size:12px;
    }


`

const Moon = styled(BiMoon)`

color: ${props=>props.theme.colors.lightText};
font-weight: 800;
`
const Sun = styled(BiSun)`
color: ${props=>props.theme.colors.darkText};
font-weight: 800;
`
export {Container,Appbar,ModeButton,Moon,Sun}