import React from 'react'
import { Feature, OptForm } from '../components'
import FaqContainer from '../containers/faq'
import FooterContainer from '../containers/Footer'
import { HeaderContainer } from '../containers/header'
import JumbotronContainer from '../containers/Jumbotron'

export default function Home() {
    return (
    <>
        <HeaderContainer>
            <Feature >
                <Feature.Title>
                    Unlimited films, TV programmes and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Unlimited films, TV programmes and more.
                </Feature.SubTitle>
           
        <OptForm>
            
                 <OptForm.Input placeholder="Email address"/>
                 <OptForm.Button>Get Started</OptForm.Button>
                 <OptForm.Break/>
                 <OptForm.Text>
                     Ready to watch? Enter your email to create or restart your membership.
                 </OptForm.Text>
             </OptForm>
             </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqContainer/>
        <FooterContainer/>
    </>
    )
}
