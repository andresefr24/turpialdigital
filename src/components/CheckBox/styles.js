import { withStyles } from '@material-ui/core/styles';

const useStyles = withStyles({
    root: {
      '&$checked': {
        color: '#fdcf08',
      },
    }
  });


export default useStyles;