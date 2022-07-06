import Icon from '@src/components/icon/Icon';
import { CloseIconImage } from '@src/images/icon/close';
import { IconComponentProps } from '@src/components/icon/types/icon.type';
import { ForwardedRef, forwardRef } from 'react';

type CloseIconComponentProps = IconComponentProps;

const Close = forwardRef((props: CloseIconComponentProps, ref: ForwardedRef<HTMLElement>) => {
  return <Icon image={CloseIconImage.Yellow} {...props} ref={ref} />;
});

export default Close;
