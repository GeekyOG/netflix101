import React, {useState, useContext, createContext} from 'react'
import {Container, Frame, Title, Item, Inner, Header, Body} from './styled/accordian'

const ToggleContext = createContext();

export default function Accordian({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>

        </Container>
    )
} 

Accordian.Title = function AccordianTitle({children, ...restProps}) {
    return <Title {...restProps}>
        {children}
    </Title>
}
 
Accordian.Frame = function AccordianFrame({children, ...restProps}) {
    return <Frame {...restProps}>
        {children}
    </Frame>
}

Accordian.Item = function AccordianItem({children, ...restProps}) {
    const [toggleshow, settoggleshow] = useState(false)
    return <ToggleContext.Provider value={{ toggleshow, settoggleshow}}><Item {...restProps}>
         {children}
    </Item>
    </ToggleContext.Provider>
       
}

Accordian.Header = function AccordianHeader({children, ...restProps}) {
    const {toggleshow, settoggleshow} = useContext(ToggleContext);
    return <Header {...restProps} onClick={()=> settoggleshow((toggleshow)=> !toggleshow)}>
        {children}
        {toggleshow ? (
            <img src="images/icon/close-slim.png" alt="icon"/>
        ) : <img src="images/icon/add.png" alt="icon"/>
    }
    </Header>
}  


Accordian.Body = function AccordianBody({children, ...restProps}) {
    const {toggleshow} = useContext(ToggleContext);

    return  toggleshow ? <Body {...restProps }>
        {children}
    </Body>  : null
}