import ActiveLink from "./ActiveLink";
import * as React from 'react';

export default class Nav extends React.Component {
  public render() {
    return (
      <div>
        <ActiveLink href='/'>Home</ActiveLink>
        <ActiveLink href='/about'>About</ActiveLink>
      </div>
    );
  }
}
