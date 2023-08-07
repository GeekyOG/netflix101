import React from "react";
import { Jumbotron } from "../components";
import jumbodata from "../features/jumbo";

function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbodata.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction} item={item}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} />
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
