import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateAndTimePicker from '../../components/DatePicker';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import useStyles, { 
    OnboardingContainer,
    SectionTitle,
    SectionText,
    DateContainer,
    LopdContainer,
    LopdText,
    ButtonContainer,
    MyButton,
} from './styles';
import WindowSection from '../../components/WindowSection';
import CheckBox from '../../components/CheckBox';


export default function ConsultancyForm() {

    const [acceptLOPD, setAcceptLOPD] = useState(false);

    const isMobile = useMediaQuery('(max-width:484px)');
    const isBigScreen = useMediaQuery('(min-width:1562px)');

    const handleChange = () => {
        setAcceptLOPD(!acceptLOPD);
    }

    const {
        smallTextFieldContainer,
        bigTextFieldContainer,
        margin,
        textField
    } = useStyles();

    return (
        <WindowSection id='myform'>

            <OnboardingContainer isMobile={isMobile}>
            
                <SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </SectionTitle>

                <SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                    ¡Enhorabuena! Has dado el primer paso para hacer crecer tu negocio y, con ello, tus ganancias. Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita. ¡Estamos ansiosos por conocerte!
                </SectionText>

                <form noValidate autoComplete="off">
                    <div className={smallTextFieldContainer} isMobile={isMobile}>
                        <TextField 
                        className={textField}
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Nombre y Apellido'
                        isMobile={isMobile}
                        />

                        <TextField 
                        className={textField}
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Teléfono'
                        helperText='Incluye el código de tu país'
                        isMobile={isMobile}
                        />

                        <TextField 
                        className={textField}
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Email'
                        isMobile={isMobile}
                        />
                    </div>
                    
                    <div className={bigTextFieldContainer}>    

                        <FormControl fullWidth className={margin} variant="filled">
                            <InputLabel>Nombre de tu negocio</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={1}
                            variant="filled"
                            />
                        </FormControl>

                        <FormControl fullWidth className={margin} variant="filled">
                            <InputLabel>¿A qué se dedica tu negocio?</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Ej: Somos una agencia de marketing digital especializada en el sector gastronómico"
                            variant="filled"
                            />
                        </FormControl>

                        <FormControl fullWidth className={margin} variant="filled">
                            <InputLabel>¿Qué te gustaría lograr con la asesoría?</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Ej: Tener una idea clara de cómo debo gestionar mi presencia digital para aumentar mis ventas"
                            variant="filled"
                            />
                        </FormControl>

                        <FormControl fullWidth className={margin} variant="filled">
                            <InputLabel>Si tu negocio tiene página web y redes sociales, déjanoslas aquí:</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            variant="filled"
                            />
                        </FormControl>
                    </div>
                </form>
            
                    <SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                        <b>Selecciona la fecha y hora de tu preferencia.</b>
                        <br/>
                        Podemos contactarte los días lunes, miércoles y viernes entre las <b>18:00 y las 20:00 (hora España).</b> La llamada tendrá una duración de 30 minutos.
                    </SectionText>

                <DateContainer isMobile={isMobile}>
                    <DateAndTimePicker/>
                </DateContainer>

            </OnboardingContainer>

            <LopdContainer isMobile={isMobile}>
                <CheckBox 
                    checked={acceptLOPD}
                    onChange={handleChange}
                />
                <LopdText>
                    Acepto la política de privacidad
                </LopdText>
            </LopdContainer>

            <ButtonContainer isMobile={isMobile}>
                <MyButton 
                    variant="contained" 
                    color={acceptLOPD ? "secondary" : "grey"}
                    disabled={!acceptLOPD}
                >
                    AGENDAR
                </MyButton>
            </ButtonContainer>

        </WindowSection>
    )
}