import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width:100vw;
  padding: ${({theme})=> theme.scale.base}px;
  background-color: ${({theme})=>theme.palette.primary};
  display:flex;
  align-items: center;
  justify-content: space-between;
  z-index:1000;

  @media (max-width:484px) {
      padding: 10px;
    }
`;

export const LogoContainer = styled.div`
  img {
    height: ${({theme})=>theme.scale.base*4}px;
    margin-left: ${({theme, isMobile})=>isMobile && theme.scale.base}px; 
    cursor: pointer; 
  }
`;

export const NavList = styled.ul`
    list-style:none;
    display:flex;
    
    li {
      margin-left: ${({theme})=>theme.scale.base*3}px;
      padding: ${({theme})=>theme.scale.base}px;
      transition: all 0.2s;
      cursor: pointer;
      
      &:hover{
        background-color: ${({theme})=>theme.palette.dark};
        
        a {
          color: ${({theme})=>theme.palette.light};
        }
      }
      
      a {
        text-decoration: none;
        color: ${({theme})=>theme.palette.dark};
        font-family: ${({theme})=>theme.fonts.primary};
        font-size: ${({theme})=>theme.scale.paragraph};
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
`;