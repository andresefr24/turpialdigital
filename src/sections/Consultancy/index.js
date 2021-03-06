import React from 'react';
import * as S from './styles';
import Button from '../../components/Button';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Consultancy({setFormIsOpen}){
    const isMobile = useMediaQuery('(max-width:484px)');
    const customBreakpoint = useMediaQuery('(min-width:1216px)');

    return (
            <S.SectionContainer isMobile={isMobile}>

                <S.OnboardingContainer isMobile={isMobile} isOnCustomBreakpoint={customBreakpoint}>
                    <S.SectionTitle1 isMobile={isMobile}>
                        El marketing digital
                    </S.SectionTitle1>

                    <S.SectionTitle2 isMobile={isMobile}>
                        puede ser fácil a simple vista, 
                        pero realmente no lo es
                    </S.SectionTitle2>

                    <S.SectionParagraph>
                        En el mundo digital <b>no existen fórmulas mágicas</b> ni estandarizadas y lo que puede funcionar para un tipo de negocio, puede que para otro sea una estrategia destinada al fracaso. 
                        Una cosa es cierta: hoy, más que nunca, <b>tener una presencia sólida en Internet es indispensable.</b>                
                        <br />
                        <br />
                        Si estás empezando a descubrir lo que el marketing digital puede hacer por tu negocio, <b>tienes dudas sobre qué camino seguir</b> y cuáles estrategias implementar, queremos darte algunas recomendaciones y acompañarte en el proceso. Agenda una asesoría GRATIS con nosotros.
                    </S.SectionParagraph> 

                    <Button styleType='callToAction' onClick={()=>{
                        setFormIsOpen(prevState=>!prevState)
                        const scrollOptions = {
                            left: 100,
                            top: 0,
                            behavior: 'auto'
                          }
                        
                          window.scrollTo(scrollOptions);
                        }
                        }>
                        QUIERO UNA ASESORÍA GRATIS
                    </Button> 

                </S.OnboardingContainer>

                {isMobile ?
                    null :
                    <S.ImageContainer shouldShow={customBreakpoint}>
                        <S.IphoneImage />
                    </S.ImageContainer>
                }
            </S.SectionContainer>                        
    )
}