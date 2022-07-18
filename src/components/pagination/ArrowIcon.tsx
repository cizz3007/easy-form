import { arrowDirectionStyle } from '@src/components/pagination/arrowStyle';

type ArrowDirectionType = 'left' | 'right' | 'up' | 'down';

export interface ArrowIconProps {
  width?: number;
  height?: number;
  color?: string;
  direction?: ArrowDirectionType;
}

function ArrowIcon({ width = 24, height = 24, color = 'black', direction = 'left' }: ArrowIconProps) {
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
        d="M16.2431 6.34317L14.8288 4.92896L7.75781 12L14.8289 19.0711L16.2431 17.6569L10.5862 12L16.2431 6.34317Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowIcon;
