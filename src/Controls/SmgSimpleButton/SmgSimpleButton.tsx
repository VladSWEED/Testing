import { FC } from 'react';
import { SmgButton } from './SmgSimpleButton.style';

const TYPES = {
  standard: 'grey100',
  secondary: 'grey400',
  success: 'blue200',
  primary: 'green200',
};

type Values<T> = T[keyof T];

interface buttonProps {
  type?: Values<typeof TYPES>,
  className?: string,
  children: React.ReactNode
}

const SmgSimpleButton: FC<buttonProps> = ({
  type, className, children, 
})=> {
  return (
    <SmgButton 
      className={className}
      type={TYPES[type] ?? TYPES.standard}
    >
      {children}
    </SmgButton>
  );
};

export default SmgSimpleButton;
