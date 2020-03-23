import { createMuiTheme } from '@material-ui/core/styles';

// ANCHOR Colors
import * as COLORS from '@material-ui/core/colors';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Nunito", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: COLORS.purple,
    secondary: {
      main: COLORS.purple[700],
    },
  },
});
