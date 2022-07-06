import { ReactNode } from 'react';
import { Property } from 'csstype';
import AlignItems = Property.AlignItems;
import JustifyContent = Property.JustifyContent;

interface FlexProps {
  className?: string;
  children: ReactNode;
  alignItems: AlignItems;
  justifyContent?: JustifyContent;
}

const Flex = ({ className, children, alignItems = 'center', justifyContent }: FlexProps) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
