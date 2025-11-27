import { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { data } from "./data";
import { Pagination } from "./pagination";

export const InvitedMembers = () => {
  const [page, setPage] = useState(0);

  const items = useMemo(() => data.slice(page * 5, (page + 1) * 5), [page]);

  return (
    <Container>
      <Content>
        <div className="data">
          <Row>
            <HeaderCell style={{ borderRadius: "12px 0px 0px" }}>Name</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell style={{ borderRadius: "0px 12px 0px 0px" }}>Reward</HeaderCell>
          </Row>
          {items.map(({ email, status, reward, avatar }, index) => (
            <Row key={index}>
              <Cell>
                <img src={avatar} width={40} height={40} />
                <Email>{email}</Email>
              </Cell>
              <Cell>
                <Status $active={status === "active"}>
                  <div className="dot"></div>
                  {status}
                </Status>
              </Cell>
              <Cell>
                {status === "active" ? <Reward>+{reward} PWB</Reward> : <PendingReward>Pending</PendingReward>}
              </Cell>
            </Row>
          ))}
        </div>
      </Content>
      <Pagination page={page} pages={Math.ceil(data.length / 5)} onPageChange={(newPage) => setPage(newPage)} />
    </Container>
  );
};

const Container = styled.div`
  overflow: auto;
  border-radius: var(--radius-xl, 12px);
  border: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));
`;

const Content = styled.div`
  overflow: auto;
  .data {
    min-width: 600px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 134px 120px;
`;

const HeaderCell = styled.div`
  display: flex;
  padding: var(--spacing-lg, 12px) var(--spacing-3xl, 24px);
  align-items: center;
  gap: var(--spacing-xs, 4px);
  border-bottom: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  background: var(--Colors-Background-bg-secondary, #161b26);

  color: var(--colors-text-text-tertiary-600, #94969c);

  /* Text xs/Medium */

  font-size: var(--Font-size-text-xs, 12px);

  font-weight: 500;
  line-height: var(--Line-height-text-xs, 18px); /* 150% */
`;

const Cell = styled.div`
  display: flex;
  height: 72px;
  padding: var(--spacing-xl, 16px) var(--spacing-3xl, 24px);
  align-items: center;
  gap: var(--spacing-lg, 12px);
  border-bottom: 1px solid var(--Colors-Border-border-secondary, #1f242f);
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides any overflowing content */
  text-overflow: ellipsis; /* Displays an ellipsis for hidden overflow */
`;

const Email = styled.div`
  color: var(--colors-text-text-primary-900, #f5f5f6);

  /* Text sm/Medium */

  font-size: var(--Font-size-text-sm, 14px);

  font-weight: 500;
  line-height: var(--Line-height-text-sm, 20px); /* 142.857% */
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides any overflowing content */
  text-overflow: ellipsis; /* Displays an ellipsis for hidden overflow */
`;

const Status = styled.div<{ $active: boolean }>`
  display: flex;
  padding: var(--spacing-xxs, 2px) var(--spacing-sm, 6px);
  align-items: center;
  gap: var(--spacing-xs, 4px);

  color: var(--colors-text-text-secondary-700, #cecfd2);
  text-align: center;

  /* Text xs/Medium */

  font-size: var(--Font-size-text-xs, 12px);

  font-weight: 500;
  line-height: var(--Line-height-text-xs, 18px); /* 150% */
  text-transform: capitalize;
  border-radius: var(--radius-sm, 6px);
  border: 1px solid var(--Colors-Border-border-primary, #333741);
  background: var(--Colors-Background-bg-primary, #0c111d);

  /* Shadows/shadow-xs */
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(255, 255, 255, 0));

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--Component-colors-Utility-Warning-utility-warning-500, #f79009);
    ${({ $active }) =>
      $active &&
      css`
        background-color: var(--Component-colors-Utility-Success-utility-success-500, #17b26a);
      `}
  }
`;

const Reward = styled.div`
  padding: var(--spacing-xxs, 2px) var(--spacing-md, 8px);
  border-radius: var(--radius-full, 9999px);
  border: 1px solid var(--Component-colors-Utility-Success-utility-success-200, #085d3a);
  background: var(--Component-colors-Utility-Success-utility-success-50, #053321);
  color: var(--Component-colors-Utility-Success-utility-success-700, #75e0a7);
  text-align: center;

  /* Text xs/Medium */

  font-size: var(--Font-size-text-xs, 12px);

  font-weight: 500;
  line-height: var(--Line-height-text-xs, 18px); /* 150% */
`;

const PendingReward = styled.div`
  padding: var(--spacing-xxs, 2px) var(--spacing-md, 8px);
  border-radius: var(--radius-full, 9999px);
  border: 1px solid var(--Component-colors-Utility-Gray-utility-gray-200, #333741);
  background: var(--Component-colors-Utility-Gray-utility-gray-50, #161b26);

  color: var(--Component-colors-Utility-Gray-utility-gray-700, #cecfd2);
  text-align: center;

  /* Text xs/Medium */

  font-size: var(--Font-size-text-xs, 12px);

  font-weight: 500;
  line-height: var(--Line-height-text-xs, 18px); /* 150% */
`;
