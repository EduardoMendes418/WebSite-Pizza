import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';

function Footer() {
    return (

        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" >Pizza</SocialLogo>
                        <SocialIcons>

                            <SocialIconLink href="/" target="_blank" aria-label="facebook" rel="noopenernoreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            
                            <SocialIconLink href="/" target="_blank" aria-label="Instagran" rel="noopenernoreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopenernoreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopenernoreferrer">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopenernoreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
