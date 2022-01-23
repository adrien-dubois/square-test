import React from 'react';
import { MdPlace } from 'react-icons/md';
import PText from '../../subcomponents/PText';
import { ItemStyles } from './ContactInfoItem.elements';

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = 'This is an info',
}) {
  return (
    <ItemStyles>
        <div className="icon"> {icon} </div>
        <div className="info">
            <PText> {text} </PText>
        </div>
    </ItemStyles>
  );
}
