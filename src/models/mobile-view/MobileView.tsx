// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useWindowSize } from '../../utils/hooks/useWindowSize';

// ANCHOR Interface
import { IMobileState } from '../../utils/typescript/interfaces/Mobile';

export const MobileView = createModel<IMobileState>(
  () => {
    const { width, height } = useWindowSize();

    return {
      isMobile: width < 960,
      isDesktop: width > 960,
      width,
      height,
    };
  },
  {
    displayName: 'Models.MobileView',
  },
);
