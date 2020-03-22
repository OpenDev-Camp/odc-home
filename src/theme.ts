import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Nunito", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: purple,
    secondary: {
      main: '#f1eff2',
    },
  },
});
