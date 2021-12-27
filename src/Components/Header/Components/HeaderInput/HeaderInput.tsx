import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchIcon } from '../../../Icons';
import SmgSimpleInput from '../../../../Controls/SmgSimpleInput';
import { InputWrapper } from './HeaderInput.styles';

type headerInputProps = {
  isInputOpen: boolean,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onMouseEnter: ()=> void,
  className?: string,
}

const HeaderInput: FC<headerInputProps> = ({
  isInputOpen, value, onChange, onMouseEnter, className
}) => {
  const [t] = useTranslation();
  return (
    <InputWrapper isOpen={isInputOpen} >
      <div>
        <SmgSimpleInput 
          isShow={isInputOpen} 
          value={value}
          onChange={onChange}
          placeholder={t('header.inputPlaceholder')}
          className={className} 
        />
        <SearchIcon isActive={isInputOpen} onMouseEnter={onMouseEnter} className="search-icon"/>
      </div>          
    </InputWrapper>
  );
};

export default HeaderInput;
