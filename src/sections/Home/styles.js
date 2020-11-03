import styled from 'styled-components';

export const VideoContainer = styled.div`
  overflow: hidden;
  max-height: 100vh;
  max-width: 100vw;  
`;

export const VideoHome = styled.video`
    height:${({isMobile})=>isMobile && '100%'};
    width:${({isMobile})=>!isMobile && '100%'};  
    padding-top: ${({theme})=> theme.scale.base*6.5}px;  
`;

export const TextOverlay = styled.div`
  position:absolute;
  left:0;
  top:0;
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.4);
`;

export const HomeText = styled.p`   
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme})=> theme.scale.base*10}px;  
    color: ${({theme})=> theme.palette.light};
    width:70%;
`;