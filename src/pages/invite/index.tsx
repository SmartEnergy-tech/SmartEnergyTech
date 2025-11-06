import styled from "styled-components";

import { InfoTooltip } from "../../components/tooltip";
import { PrimaryButton } from "../../components/button";
import copyIcon from "../../assets/copy.svg";
import { useState } from "react";
import { InvitedMembers } from "./invited-members";

export const InvitePage = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://eng-c.com/ref/Johnx8qwFAS89";
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Container>
      <MembersCard>
        <MembersTitle>Earn PWB by Inviting Friends</MembersTitle>
        <ReferralLinkContainer>
          <div className="title">Your Referral Link</div>
          <LinkWithButton>
            <LinkWithInfo>
              <LinkTxt>{link}</LinkTxt>
              <InfoTooltip info="Info text for tooltip" />
            </LinkWithInfo>
            <CopyButton $boxShadow={false} onClick={onCopy}>
              {copied ? (
                "Copied"
              ) : (
                <>
                  <img src={copyIcon} />
                  Copy
                </>
              )}
            </CopyButton>
          </LinkWithButton>
          <div className="info">This is your personal link. When someone registers through it you get rewarded.</div>
        </ReferralLinkContainer>
        <InvitedMembers />
      </MembersCard>
      <Card>Info</Card>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 444px;
  gap: var(--spacing-3xl, 24px);
`;

const Card = styled.div`
  padding: var(--spacing-3xl, 24px);

  border-radius: var(--radius-3xl, 20px);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const MembersCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
`;

const MembersTitle = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text xl/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-xl, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-xl, 30px); /* 150% */
`;

const ReferralLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 6px);
  padding: var(--spacing-3xl, 24px);
  border-radius: var(--radius-3xl, 20px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);
  .title {
    color: var(--colors-text-text-secondary-700, #cecfd2);

    /* Text sm/Medium */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
  .info {
    color: var(--colors-text-text-tertiary-600, #94969c);

    /* Text sm/Regular */
    font-family: var(--Font-family-font-family-body, Inter);
    font-size: var(--Font-size-text-sm, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  }
`;

const LinkWithButton = styled.div`
  display: flex;
  align-items: ce;
`;

const LinkWithInfo = styled.div`
  flex: 1;
  display: flex;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
  align-items: center;
  gap: var(--spacing-md, 8px);
  border-radius: var(--spacing-md, 8px) var(--spacing-none, 0) var(--spacing-none, 0) var(--spacing-md, 8px);
  border-top: 1px solid var(--Colors-Border-border-primary, #333741);
  border-bottom: 1px solid var(--Colors-Border-border-primary, #333741);
  border-left: 1px solid var(--Colors-Border-border-primary, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);
`;

const LinkTxt = styled.div`
  flex: 1;
  overflow: hidden;
  color: var(--colors-text-text-primary-900, #f5f5f6);
  text-overflow: ellipsis;

  /* Text md/Regular */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-md, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Line-height-text-md, 24px); /* 150% */
`;

const CopyButton = styled(PrimaryButton)`
  width: 92px;
  padding: 10px 14px;
  gap: 4px;
  border-radius: var(--spacing-none, 0) var(--radius-md, 8px) var(--radius-md, 8px) var(--spacing-none, 0);
  border: 2px solid var(--Gradient-skeuemorphic-gradient-border, rgba(255, 255, 255, 0.12));
  background: var(--Component-colors-Components-Buttons-Primary-button-primary-bg, #00c1ba);
  color: var(--Component-colors-Components-Buttons-Primary-button-primary-fg, #fff);

  /* Text sm/Semibold */
  font-family: var(--Font-family-font-family-body, Inter);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
`;
