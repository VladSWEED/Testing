import React, { FC } from 'react';
import { SmgInput } from './SmgSimpleInput.styles';

interface inputProps {
  className?: string,
  placeholder?: string,
  isShow?: boolean,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void,
}

const SmgSimpleInput: FC<inputProps> = ({
  className, placeholder, isShow, value, onChange
})=> {
  return (
    <SmgInput 
      type="text"
      className={className} 
      placeholder={placeholder ?? ''} 
      isShow={isShow}  
      value={value}
      onChange={onChange}
    />    
  );
};

export default SmgSimpleInput;
