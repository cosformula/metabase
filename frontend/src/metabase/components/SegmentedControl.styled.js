import React from "react";
import styled from "styled-components";
import _ from "underscore";
import Icon from "metabase/components/Icon";
import { color } from "metabase/lib/colors";

const BORDER_RADIUS = "8px";

export const SegmentedList = styled.ul`
  display: flex;
  width: ${props => (props.fullWidth ? 1 : 0)};
`;

export const SegmentedItem = styled.li`
  display: flex;
  flex-grow: ${props => (props.fullWidth ? 1 : 0)};
  padding: 6px 12px;
  cursor: pointer;

  border: 1px solid ${color("border")};
  border-right-width: ${props => (props.isLast ? "1px" : 0)};
  border-top-left-radius: ${props => (props.isFirst ? BORDER_RADIUS : 0)};
  border-bottom-left-radius: ${props => (props.isFirst ? BORDER_RADIUS : 0)};
  border-top-right-radius: ${props => (props.isLast ? BORDER_RADIUS : 0)};
  border-bottom-right-radius: ${props => (props.isLast ? BORDER_RADIUS : 0)};
`;

export const SegmentedItemLabel = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  color: ${props => (props.isSelected ? color(props.selectedColor) : null)};
  cursor: pointer;

  :hover {
    color: ${props => (!props.isSelected ? color(props.selectedColor) : null)};
  }
`;

export const SegmentedControlRadio = styled.input.attrs({ type: "radio" })`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

function IconWrapper(props) {
  return <Icon {..._.omit(props, "iconOnly")} />;
}

export const ItemIcon = styled(IconWrapper)`
  margin-right: ${props => (props.iconOnly ? 0 : "4px")};
`;
