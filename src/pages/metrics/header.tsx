import styled from "styled-components";

import tvlIcon from "../../assets/metrics/tvl.svg";
import userIcon from "../../assets/metrics/user.svg";
import unlockedIcon from "../../assets/metrics/unlocked.svg";
import topIcon from "../../assets/metrics/top.svg";

type Type = "tvl" | "user" | "unlocked" | "top";

interface Props {
  title: string;
  type: Type;
  info: string;
}

const icons: Record<Type, string> = {
  tvl: tvlIcon,
  user: userIcon,
  unlocked: unlockedIcon,
  top: topIcon,
};

export const Header = ({ title, type, info }: Props) => (
  <Container>
    <div className="title">
      <img src={icons[type]} /> {title}
    </div>
    <div className="info">{info}</div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 8px);
  .title {
    display: flex;
    align-items: center;
    gap: var(--spacing-md, 8px);

    color: var(--colors-text-text-primary-900, #f5f5f6);

    /* Text lg/Semibold */

    font-size: var(--Font-size-text-lg, 18px);

    font-weight: 600;
    line-height: var(--Line-height-text-lg, 28px); /* 155.556% */
  }
  .info {
    color: var(--colors-text-text-secondary-700, #cecfd2);
  }
`;
