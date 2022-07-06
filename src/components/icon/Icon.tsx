import { iconComponentStyle } from '@src/components/icon/styles/iconStyle';
import { IconComponentProps } from '@src/components/icon/types/icon.type';
import { ForwardedRef, forwardRef } from 'react';
import { ImageIconImage } from '@src/images/icon/image';

const Icon = forwardRef(
  (
    { id, size = 'Medium', className, image = ImageIconImage.Fill, ...rest }: IconComponentProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    return <i {...rest} css={iconComponentStyle(size, image)} id={id} className={className} ref={ref}></i>;
  }
);

export default Icon;
