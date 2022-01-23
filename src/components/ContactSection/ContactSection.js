import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { Contain } from '../../globalStyles';
import SectionTitle from '../../subcomponents/SectionTitle';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem';
import { ContactSectionStyle, ContactWrapper } from './ContactSection.elements';

export default function ContactSection() {
  return (
  <ContactSectionStyle>
      <Contain>
          <SectionTitle heading='Dites-nous tout!' subheading='Formulaire de contact'/>
          <ContactWrapper>

              {/* LEFT SECTION */}
              <div className="left">
                  <ContactInfoItem 
                    icon={<MdLocalPhone/> }
                    text='+33 701 234 567'  
                  />
                  <ContactInfoItem 
                    icon={<MdEmail/>}
                    text='contact@the-square.fr'  
                  />
                  <ContactInfoItem 
                    text='Freelance, France'
                  />
              </div>

              {/* RIGHT SECTION */}
              <div className="right">
                  <ContactForm />
              </div>
          </ContactWrapper>
      </Contain>
  </ContactSectionStyle>
);
}
