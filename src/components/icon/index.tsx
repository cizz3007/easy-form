import BaseIcon from './Icon';
import CloseIcon from '@src/components/icon/CloseIcon';
import { ForwardRefExoticComponent } from 'react';
import { IconComponentProps } from '@src/components/icon/types/icon.type';

interface CompoundedComponent extends ForwardRefExoticComponent<IconComponentProps> {
  Default: typeof BaseIcon;
  Close: typeof CloseIcon;
}

const Icon = BaseIcon as CompoundedComponent;

Icon.Close = CloseIcon;

export default Icon;
