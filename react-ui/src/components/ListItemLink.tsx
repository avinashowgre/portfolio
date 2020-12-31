import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { Component } from "react";
import { NavLink, LinkProps as RouterLinkProps } from "react-router-dom";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const ListItemLink = (props: ListItemLinkProps) => {
  const { primary, to } = props;

  return (
    <li>
      <ListItem
        component={NavLink}
        to={to}
        activeClassName="Mui-selected"
        exact
      >
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};
