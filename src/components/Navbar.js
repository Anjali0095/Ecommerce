import React  from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { mobile } from '../Responsive';



const Container = styled.div`
     height: 60px;
     font-family: 'Urbanist', sans-serif;
     padding: 20px;
     ${mobile ({ height: "50px"})}
     
    `

// const Container = styled.div`
//      height: 60px;
//      @media only screen and (max-width: 380px) {
//         display: none;
//     }
//     `
const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between; 
        weight: 20px;
        align-items:center;
        ${mobile ({ padding: "10px 0px"})}
`
const Left = styled.div`
           flex: 1;
           display:flex;
           align-items:center;
           
           `
const Language = styled.span`
     font-size:larger;
     cursor:pointer;
     font-weight:800;
     ${mobile ({display:"none"})}
     `

     const SearchContainer = styled.div`
     border: 0.5px solid lightgray;
     display: flex;
     align-items: center;
     margin-left:25px;
     padding:5px;
     width: 50%;
     justify-content: flex-end;
     `
      const Input = styled.input`
       border:none;
      
       ${mobile ({ width: "70px"})}
     `
const Center = styled.div`
             flex:1;
             text-align: center;
             
             `

const Logo = styled.h1`
             font-size: bold;
            
             `
const Right = styled.div`
           flex:1;
           display: flex;
           align-items:center;
           justify-content:flex-end;
             `
const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left:25px;
      font-weight:800;
      `
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                      <Input placeholder='Search'/>
                       <Search style={{color:"gray", fontSize:"20"}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>MONI.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge> 
                    </MenuItem>
                   
                </Right>
                
            </Wrapper>
        </Container>
    )
}

export default Navbar
