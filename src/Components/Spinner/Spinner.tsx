import { FC } from 'react';
import * as S from './Spinner.styles';

const Spinner: FC<{ className?: string; primary?: boolean }> = ({ className, primary }) => {
  return (
    <S.Container className={className} $primary={!!primary}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Container>
  );
};

export default Spinner;
