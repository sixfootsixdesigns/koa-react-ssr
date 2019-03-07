import React from 'react';
import Nav from '../Nav';
import './layout.scss';
import Head from 'next/head'

interface LayoutProps {
  title?: string;
}

export default class Layout extends React.Component<LayoutProps> {
  public render() {
    const { children, title } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title || 'My App'}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Nav />
        <main>
          {children}
        </main>
      </React.Fragment>
    );
  }
}
