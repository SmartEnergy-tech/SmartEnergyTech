import { useState } from "react";
import styled from "styled-components";

import linkedInIcon from "../../assets/socials/linkedin.svg";
import avatar1Img from "../../assets/avatar-1.png";
import avatar2Img from "../../assets/avatar-2.png";
import avatar3Img from "../../assets/avatar-3.png";
import arrowLeftImg from "../../assets/arrow-left.svg";
import { Info, Title } from "./common";
import { useIsWidth } from "../../hooks/use-is-width";

const data = [
  {
    name: "Olivia Rhye",
    date: "20 Jan 2024",
    quote: `The idea of building green factories and earning from their energy production — that's the kind of project I want to be part of. ENGC made it easy to start small.`,
    image: avatar1Img,
  },
  {
    name: "Ana M",
    date: "20 Jan 2026",
    quote:
      "Finally, a project where I know exactly what I'm funding. I'm not just speculating — I'm co-owning real infrastructure that will matter 10 years from now.",
    image: avatar2Img,
  },
  {
    name: "Stav Melidesh",
    date: "20 June 2025",
    quote:
      "This feels more like joining a movement than just investing. I love the transparency and the focus on real-world assets.",
    image: avatar3Img,
  },
  {
    name: "Olivia Rhye 2",
    date: "20 Jan 2024",
    quote: `The idea of building green factories and earning from their energy production — that's the kind of project I want to be part of. ENGC made it easy to start small.`,
    image: avatar1Img,
  },
  {
    name: "Ana M 2",
    date: "20 Jan 2026",
    quote:
      "Finally, a project where I know exactly what I'm funding. I'm not just speculating — I'm co-owning real infrastructure that will matter 10 years from now.",
    image: avatar2Img,
  },
  {
    name: "Stav Melidesh 2",
    date: "20 June 2025",
    quote:
      "This feels more like joining a movement than just investing. I love the transparency and the focus on real-world assets.",
    image: avatar3Img,
  },
];

export const Supporters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useIsWidth(769, "max");

  const itemsPerPage = isMobile ? 1 : 3;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= data.length ? 0 : prevIndex + itemsPerPage));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? data.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <Container>
      <Title>What Early Supporters Are Saying</Title>
      <Info>ENGC is still early — but community members already see its long-term value.</Info>
      <Elements>
        {data.slice(currentIndex, currentIndex + itemsPerPage).map((el, index) => (
          <Element key={index}>
            <ProfileInfo>
              <div>
                <ProfileImage src={el.image} alt={el.name} />
                <div>
                  <Name>{el.name}</Name>
                  <Date>{el.date}</Date>
                </div>
              </div>
              <img src={linkedInIcon} alt="linkedInIcon" />
            </ProfileInfo>
            <Quote>{el.quote}</Quote>
          </Element>
        ))}
      </Elements>
      <Navigation>
        <NavButton onClick={prevTestimonial}>
          <img src={arrowLeftImg} alt="arrowLeftImg" />
        </NavButton>
        <NavButton onClick={nextTestimonial}>
          <img src={arrowLeftImg} alt="arrowLeftImg" style={{ transform: "rotate(180deg)" }} />
        </NavButton>
      </Navigation>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Elements = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const Element = styled.div`
  display: flex;
  padding: var(--spacing-4xl, 32px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xl, 16px);
  flex: 1 0 0;
  border-radius: var(--radius-4xl, 24px);
  border: 2px solid var(--Colors-Border-border-tertiary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md, 8px);
`;

const NavButton = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  padding: var(--spacing-md, 8px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md, 8px);
  border-radius: var(--radius-2xl, 16px);
  border: 2px solid var(--Gradient-skeuemorphic-gradient-border, rgba(255, 255, 255, 0.12));
  background: var(--Component-colors-Components-Buttons-Primary-button-primary-bg, #00c1ba);

  /* Shadows/shadow-xs-skeuomorphic */
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(12, 17, 29, 0.18)) inset,
    0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(12, 17, 29, 0.05)) inset,
    0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
`;

const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:first-of-type {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl, 16px);
  }
`;

const ProfileImage = styled.img``;

const Name = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text lg/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
`;
const Date = styled.div`
  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text md/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;

const Quote = styled.div`
  color: var(--colors-text-text-secondary-700, #cecfd2);

  /* Text md/Regular italic */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: italic;
  font-weight: 400;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;
