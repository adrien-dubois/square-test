import React from 'react';
import { Button } from '../../globalStyles';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter 
} from 'react-icons/fa';
import { 
  FooterContainer, 
  FooterLink, 
  FooterLinksContainer, 
  FooterLinksItems, 
  FooterLinksWrapper, 
  FooterLinkTitle, 
  FooterSubHeading, 
  FooterSubscription, 
  FooterSubText, 
  Form,
  FormInput,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './Footer.elements';

const Footer = () => {
  return ( 
    <FooterContainer>

      {/* Newsletter section */}
        <FooterSubscription>
            <FooterSubHeading>
                Souscrivez à notre newsletter pour recevoir les dernières nouvelles et tendances.
            </FooterSubHeading>
            <FooterSubText>
                Vous pouvez vous désabonner à tout moment.
            </FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Votre email" />
              <Button fontBig>S'inscrire</Button>    
            </Form>
        </FooterSubscription>

      {/* Links section */}
        <FooterLinksContainer>

          {/* 1st column */}
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>À Propos</FooterLinkTitle>
              <FooterLink to='/'>Accueil</FooterLink>
              <FooterLink to='/services'>Nos services</FooterLink>
              <FooterLink to='/products'>Nos produits</FooterLink>
              <FooterLink to='/prices'>Nos tarifs</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink to='/contact'>Contactez-nous</FooterLink>
              <FooterLink to='/services'>Nos services</FooterLink>
              <FooterLink to='/products'>Nos produits</FooterLink>
              <FooterLink to='/prices'>Nos tarifs</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          {/* 2nd column */}
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>À Propos</FooterLinkTitle>
              <FooterLink to='/'>Accueil</FooterLink>
              <FooterLink to='/services'>Nos services</FooterLink>
              <FooterLink to='/products'>Nos produits</FooterLink>
              <FooterLink to='/prices'>Nos tarifs</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Réseaux Sociaux</FooterLinkTitle>
              <FooterLink to='/'>Twitter</FooterLink>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Linkedin</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        {/* Social media & copyright section */}
        <SocialMedia>
          <SocialMediaWrap>

            {/* Logo website */}
            <SocialLogo to="/">
              <SocialIcon width={50} height={50} fill="var(--white-color)" />
              YourWebsite
            </SocialLogo>

            {/* Copyright */}
            <WebsiteRights>©2022 All right reserved | made with ❤ by The Square</WebsiteRights>

            {/* Social nets icons */}
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink> 
              <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> 
              <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink> 
            </SocialIcons>

            
          </SocialMediaWrap>
        </SocialMedia>

    </FooterContainer>
  )
};

export default Footer;
