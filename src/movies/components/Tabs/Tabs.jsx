import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const STabsContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  width: 100%;
`;

const SActiveStyle = css`
  border: 1px solid #ccc;
  border-bottom-width: 0;
  border-top-width: 3px;
  border-top-color: #4fafa6;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const SInSactiveStyle = css`
  border: 1px dotted #ccc;
  border-radius: 4px;
  border-bottom: 1px solid #ccc;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
`;

const STabItem = styled.li`
  padding: 1em;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => (props.active ? SActiveStyle : SInSactiveStyle)};
  span {
    padding: 0 1em;
  }
`;

const STabGap = styled.li`
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

const STabTotal = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.8em;
`;

const Tabs = props => {
  const { tabItems, setActive } = props;
  return (
    <STabsContainer>
      {tabItems.map(({ id, name, active, total }) => (
        <STabItem key={id} active={active} onClick={() => setActive(id)}>
          <span>{name}</span>
          <STabTotal>{total}</STabTotal>
        </STabItem>
      ))}
      <STabGap />
    </STabsContainer>
  );
};

Tabs.propTypes = {
  tabItems: PropTypes.array.isRequired,
  setActive: PropTypes.func.isRequired
};

export default Tabs;
