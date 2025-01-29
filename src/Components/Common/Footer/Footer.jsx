import React from 'react'
import { Column, ContactDetails, FooterContainer, Heading, SocialIcons } from './Style/FooterStyle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Copyright } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterContainer>
    {/* Left Column: Social Media & Copyright */}
    <Column>
      <Heading>FOLLOW US</Heading>
      <SocialIcons>
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
        <InstagramIcon className="icon" />
        <LinkedInIcon className="icon" />
      </SocialIcons>
      <p >© 2024-25 Smart India Hackathon. All rights reserved.</p>
    </Column>

    {/* Right Column: Contact Details */}
    <Column>
      <Heading>CONTACT US</Heading>
      <ContactDetails>
        <div><span><LocalPhoneIcon className="icons" />+91 11 29581241, +91 11 29581240</span></div>
        <div><span><MailIcon className="icons" />sih@aicte-india.org, hackathon@aicte-india.org</span></div>
      </ContactDetails>
    </Column>
  </FooterContainer>
);
};

export default Footer