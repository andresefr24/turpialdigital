import React from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import Button from '../../components/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateAndTimePicker from '../../components/DatePicker';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '31ch',
      },
    },
  }),
);

export default function ConsultancyForm() {

    const isMobile = useMediaQuery('(max-width:484px)');

    const classes = useStyles();

    return (
        <WindowSection id='myform'>

            <S.OnboardingContainer isMobile={isMobile}>
            
                <S.SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </S.SectionTitle>

                <S.SeccionText>
                    Has dado el primer paso para hacer crecer tu negocio y con ello tus ganancias.<br/>Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita.<br/>¡Estamos ansiosos por conocerte!
                </S.SeccionText>

                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Nombre y Apellido'
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Teléfono'
                        helperText='Incluye el código de tu país'
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Email'
                        />
                    </div>
                    <div>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                            <InputLabel>Nombre de tu Negocio</InputLabel>
                            <FilledInput id="filled-adornment-amount"/>
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
                            <InputLabel>¿Qué te gustaría lograr con esta asesoría?</InputLabel>
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
            
                    <S.SeccionText>
                        Selecciona la fecha y hora de tu preferencia.
                        <br/>
                        Podemos contactarte los días lunes, miércoles y viernes entre las <b>18:00 y las 20:00 (hora España).</b> La llamada tendrá una duración de 30 minutos.
                    </S.SeccionText>

                    <S.Container>
                        <DateAndTimePicker />
                    </S.Container>

            </S.OnboardingContainer>

                 <S.Container>
                    <Button styleType='callToAction'>
                        AGENDAR
                    </Button>
                </S.Container>

        </WindowSection>
    )
}