// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useToggle } from '../../utils/hooks/useToggle';

export const HamburgerToggle = createModel(() => useToggle(false));
