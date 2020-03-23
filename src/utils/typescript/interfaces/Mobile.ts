// ANCHOR Model
import { IModelState } from '@lxsmnsyc/react-scoped-model';

export interface IMobileState extends IModelState {
  isMobile: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}
