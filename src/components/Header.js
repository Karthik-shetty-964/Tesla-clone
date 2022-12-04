import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import {selectCars} from '../features/car/carSlice'
// import {useSelector} from 'react-redux'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
//   const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#">
        <img src="/img/logo.svg" alt="logo"/>
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="/Section/#model-3">Model 3</a>
        <a href="/Section/#model-x">Model X</a>
        <a href="/Section/#model-y">Model Y</a>
        <a href="/Section/#solar-panel">Solar Panels</a>
        <a href="/Section/#solar-roof">Solar Roof</a>
      </Menu>
      <RightMenu>
        <a href="/Section/#accessories">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height : 60px;
    position : fixed;
    display: flex;
    align-items: center;
    justify-content : space-between;
    padding : 0 20px;
    top:0;
    left:0;
    right:0;
    z-index : 1;
`
const Menu = styled.div`
    display : flex;
    align-items : center;
    justify-content:center;
    flex: 1;
    margin-left:100px;
    a {
        font-weight : 600;   
        // text-transform : uppercase;  
        padding : 0 10px; 
        flex-wrap : nowrap;
    }
    @media(max-width : 768px) {
        display : none;
    } 
`
const RightMenu = styled.div`
    display : flex;
    align-items : center;
    
    a {
        font-weight : 600;   
        // text-transform : uppercase;  
        margin-right : 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor : pointer;
`
const BurgerNav = styled.div`
    position : fixed;
    top : 0;
    bottom : 0;
    right : 0;
    background-color : white;
    width : 300px;
    z-index : 16;
    list-style : none;
    padding : 20px;
    display : flex;
    flex-direction: column;
    text-align : start;
    // justify-content : space-evenly;

    transform : ${props => (props.show) ? 'translateX(0)':'translateX(100%)'};
    transition : transform 0.5s ease-in-out; 
    li{
        padding: 15px 0;
        border-bottom : 1px solid rgba(0,0,0,.2);
        
        a{
            font-weight : 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor : pointer;
`
const CloseWrapper = styled.div`
    display : flex;
    justify-content : flex-end;
`