import { FC } from 'react';
import { Button } from 'primereact/button';
import ISmgButtonProps from './Props/ISmgButtonProps';

const SmgButton: FC<ISmgButtonProps> = (props: ISmgButtonProps) => {
  return (<Button label={props.label} />);
};
export default SmgButton;
