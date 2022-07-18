import { arrowDirectionStyle } from '@src/components/pagination/arrowStyle';

type ArrowDirectionType = 'left' | 'right' | 'up' | 'down';

export interface ArrowIconProps {
  width?: number;
  height?: number;
  color?: string;
  direction?: ArrowDirectionType;
}

function DoubleArrowIcon({ width = 24, height = 24, color = 'black', direction = 'left' }: ArrowIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={arrowDirectionStyle(direction)}
    >
      <path
        d="M18.3636 7.75736L16.9494 6.34315L11.2926 12L16.9494 17.6569L18.3636 16.2426L14.121 12L18.3636 7.75736Z"
        fill="black"
      />
      <path
        d="M11.2926 6.34315L12.7068 7.75736L8.46417 12L12.7068 16.2426L11.2926 17.6568L5.63574 12L11.2926 6.34315Z"
        fill={color}
      />
    </svg>
  );
}

export default DoubleArrowIcon;
