import styled from "styled-components";

import { Info, Title } from "./common";
import image1 from "../../assets/alliances/1.svg";
import image2 from "../../assets/alliances/2.svg";
import image3 from "../../assets/alliances/3.svg";
import image4 from "../../assets/alliances/4.svg";
import image5 from "../../assets/alliances/5.svg";
import image6 from "../../assets/alliances/6.svg";
import image7 from "../../assets/alliances/7.svg";
import image8 from "../../assets/alliances/8.svg";
import image9 from "../../assets/alliances/9.svg";

export const Alliances = () => (
  <Container>
    <Title>Strategic Alliances</Title>
    <Info>Built in collaboration with renewable energy experts and clean tech pioneers.</Info>
    <Items>
      <div>
        <Item>
          <img src={image1} alt="image1" />
        </Item>
        <Item>
          <img src={image2} alt="image2" />
        </Item>
        <Item>
          <img src={image3} alt="image3" />
        </Item>
        <Item>
          <img src={image4} alt="image4" />
        </Item>
        <Item>
          <img src={image5} alt="image5" />
        </Item>
      </div>
      <div>
        <Item>
          <img src={image6} alt="image6" />
        </Item>
        <Item>
          <img src={image7} alt="image7" />
        </Item>
        <Item>
          <img src={image8} alt="image8" />
        </Item>
        <Item>
          <img src={image9} alt="image9" />
        </Item>
      </div>
    </Items>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > div:first-of-type {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(5, 150px);
    gap: 8px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  > div:last-of-type {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(4, 150px);
    gap: 8px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Item = styled.div`
  width: 150px;
  height: 150px;
  border-radius: var(--radius-4xl, 24px);
  background: var(--Colors-Background-bg-primary, #0c111d);
  display: flex;
  align-items: center;
  justify-content: center;
`;
