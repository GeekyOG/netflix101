import React from 'react'
import { OptForm } from '../components'
import Accordian from '../components/accordian'
import faqData from '../features/faq.json'
 
 export default function FaqContainer() {
     return (
         <Accordian>
             <Accordian.Title>Fequently asked questions</Accordian.Title>
             {faqData.map(item => (
                
                 <Accordian.Item key={item.id}>
                <Accordian.Header>{item.header}</Accordian.Header>
                <Accordian.Body>{item.body}</Accordian.Body>
                 </Accordian.Item>
                 
             ))}
             <OptForm>
             <OptForm.Text>
                     Ready to watch? Enter your email to create or restart your membership.
                 </OptForm.Text>
                 <OptForm.Input placeholder="Email address"/>
                 <OptForm.Button>Get Started</OptForm.Button>
                 
             </OptForm>
         </Accordian>
     )
 }
 