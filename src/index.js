import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import GlobalStyle from "./global-style";

const Container = styled.main`
  position: relative;
`;

const Section = styled.section`
  position: relative;
`;

const InnerSection = styled.div`
  position: relative;
  max-width: 500px;
  padding: 2rem;
`;

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;

const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
`;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`;

const sampleAccordionData = [
  {
    title: "Item 1",
    content:
      "Lorem ipsum dolor amet gastropub church-key gentrify actually tacos. Vegan taxidermy freegan before they sold out kickstarter copper mug iceland selvage blog prism. 8-bit vice drinking vinegar stumptown locavore. Microdosing unicorn typewriter sartorial cornhole. Man bun venmo cronut wolf shaman offal truffaut. Chillwave vinyl pug distillery adaptogen man bun tofu retro hammock kogi tbh jean shorts organic. Craft beer vinyl etsy, portland microdosing chicharrones lumbersexual crucifix cronut gentrify four loko tousled fingerstache."
  },
  {
    title: "Item 2",
    content:
      "Slow-carb knausgaard health goth kombucha tousled four loko. Messenger bag cronut +1, four loko williamsburg you probably haven't heard of them bicycle rights taiyaki ramps squid vaporware. Green juice typewriter master cleanse distillery viral wayfarers asymmetrical quinoa health goth semiotics succulents kinfolk pork belly shaman. Cronut salvia farm-to-table kickstarter shaman cloud bread echo park."
  },
  {
    title: "Item 3",
    content:
      "Health goth humblebrag live-edge meggings pork belly actually ugh kombucha banh mi plaid etsy waistcoat. Hammock celiac crucifix tousled, dreamcatcher tbh truffaut direct trade cliche synth hot chicken palo santo pork belly man bun retro. Art party +1 live-edge occupy iceland selfies beard fanny pack godard 90's messenger bag. Bushwick irony umami woke. Kale chips raw denim austin, food truck flexitarian 90's deep v. Locavore green juice cold-pressed hexagon copper mug vegan sriracha man bun la croix photo booth forage. Succulents migas irony hella mumblecore keytar waistcoat aesthetic cornhole shabby chic tumblr semiotics readymade."
  },
  {
    title: "Item 4",
    content:
      "Tbh next level subway tile ennui cloud bread. Master cleanse vaporware food truck, authentic distillery meggings ugh activated charcoal iceland gastropub fam. Raw denim direct trade pinterest keytar fam echo park wolf four dollar toast glossier kitsch taiyaki 8-bit austin. Brunch pinterest raw denim banh mi, bushwick organic artisan synth poutine man bun scenester. Occupy chartreuse food truck banh mi affogato shaman."
  },
  {
    title: "Item 5",
    content:
      "Aesthetic tofu dreamcatcher lumbersexual jianbing poke PBR&B kogi heirloom. Sartorial artisan synth tacos vegan bushwick, lomo thundercats VHS disrupt bespoke scenester. Copper mug taiyaki occupy, coloring book drinking vinegar taxidermy direct trade intelligentsia quinoa raw denim succulents. Dreamcatcher copper mug fanny pack yuccie art party hoodie, ugh portland."
  },
  {
    title: "Item 6",
    content: "Oh. You need a little dummy text for your mockup? How quaint."
  }
];

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
          console.log(refs[i].current.clientHeight);
        }}
      >
        {title}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

function App() {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);

  const refs = [item0, item1, item2, item3, item4, item5];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Section>
          <InnerSection>
            <AccordionContainer>
              <AccordionInner>
                <AccordionItems
                  accordionContent={sampleAccordionData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
              </AccordionInner>
            </AccordionContainer>
          </InnerSection>
        </Section>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
