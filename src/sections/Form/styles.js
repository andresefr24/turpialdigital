import styled from 'styled-components';

export const OnboardingContainer = styled.div`
    padding: ${({isMobile}) => isMobile ? 80 : 90}px ${({isMobile}) => isMobile ? 40 : 180}px ${({isMobile}) => isMobile ? 10 : 2}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SectionTitle = styled.h1`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*5}px`};
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: ${({theme})=> theme.palette.primary};
    text-align: center;
    margin-bottom: ${({theme})=> theme.scale.base*3}px;
`;

export const SectionText = styled.p`
    display: inline;
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme, isMobile})=> isMobile ? '12px' : theme.scale.paragraph};
    text-align: justify;
    width: ${({isMobile}) => isMobile ? 'auto' : 964}px;
    margin: ${({isBigScreen})=> isBigScreen ? 2 : 4}%;
`;

export const DateContainer = styled.div`
    display: flex;
    width: ${({isMobile}) => isMobile ? 300 : 964}px;
    margin: ${({isMobile}) => isMobile ? 30 : 10}px 0 ${({isMobile}) => isMobile ? 30 : 2}px;
`;

export const LopdContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({theme, isMobile})=> isMobile ? theme.scale.base : `${theme.scale.base*6}px`};
`;

export const LopdText = styled.p`
    display: inline;
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme, isMobile})=> isMobile ? '12px' : theme.scale.paragraph};
`;

export const ButtonContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: ${({theme})=>theme.scale.base*2}px;
    margin: ${({theme, isMobile})=> isMobile ? 0 : `${theme.scale.base}px`} 0 ${({theme, isMobile})=> isMobile ? `${theme.scale.base*8}px` : `${theme.scale.base*7}px`};
`;

