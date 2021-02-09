import React from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateAndTimePicker from '../../components/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '297px',
      },
    },
  }));

const otherStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '30ch',
  },
}));


export default function ConsultancyForm() {

    const isMobile = useMediaQuery('(max-width:484px)');
    const isBigScreen = useMediaQuery('(min-width:1562px)');

    const styles = useStyles();
    const classes = otherStyles();

    return (
        <WindowSection id='myform'>

            <S.OnboardingContainer isMobile={isMobile}>
            
                <S.SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </S.SectionTitle>

                <S.SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                    ¡Enhorabuena! Has dado el primer paso para hacer crecer tu negocio y, con ello, tus ganancias. Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita. ¡Estamos ansiosos por conocerte!
                </S.SectionText>

                <form noValidate autoComplete="off">
                    <div className={styles.root}>
                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Nombre y Apellido'
                        isMobile={isMobile}
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Teléfono'
                        helperText='Incluye el código de tu país'
                        isMobile={isMobile}
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Email'
                        isMobile={isMobile}
                        />
                    </div>
                    
                    <div className={classes.root}>    

                        <FormControl fullWidth className={classes.margin} variant="filled">
                            <InputLabel>Nombre de tu negocio</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={1}
                            variant="filled"
                            />
                        </FormControl>

                        <FormControl fullWidth className={classes.margin} variant="filled">
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

                        <FormControl fullWidth className={classes.margin} variant="filled">
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

                        <FormControl fullWidth className={classes.margin} variant="filled">
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
            
                    <S.SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                        <b>Selecciona la fecha y hora de tu preferencia.</b>
                        <br/>
                        Podemos contactarte los días lunes, miércoles y viernes entre las <b>18:00 y las 20:00 (hora España).</b> La llamada tendrá una duración de 30 minutos.
                    </S.SectionText>

                <S.DateContainer isMobile={isMobile}>
                    <DateAndTimePicker/>
                </S.DateContainer>

            </S.OnboardingContainer>

            <S.LopdContainer isMobile={isMobile}>
                <CheckBox/>
                <S.LopdText>
                    Acepto la política de privacidad
                </S.LopdText>
            </S.LopdContainer>

            <S.ButtonContainer isMobile={isMobile}>
                <Button styleType='callToAction'>
                    AGENDAR
                </Button>
            </S.ButtonContainer>

        </WindowSection>
    )
}