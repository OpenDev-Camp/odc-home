import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '77vh',
    textAlign: 'center',
    position: 'absolute',
    maxWidth: '50vw',
    left: '35%',
  },
  heading: {
    fontSize: '136px',
    fontWeight: 100,
    margin: '0px 0px -88px 0px',
    color: '#211b19',
    textTransform: 'uppercase',
  },
  body: {
    fontSize: '15px',
    fontWeight: 400,
    textTransform: 'uppercase',
    color: '#211b19',
    background: '#FAFAFA',
    padding: '10px 25px',
    bottom: '50%',
    display: 'inline-block',
  },
  button: {
    display: 'inline-block',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#FAFAFA',
    textTransform: 'uppercase',
    padding: '13px 23px',
    background: '#9400D4',
    fontSize: '18px',
    '&:hover': {
      color: '#9400D4',
      background: '#191630',
    },
  },
}));
