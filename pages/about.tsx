import React from 'react';
import Layout from '../components/Layout/Layout';

class About extends React.Component {
  static async getInitialProps() {
    return {

    };
  }

  public render() {
    return (
      <Layout>
        <div>Hello this the about page</div>
      </Layout>
    );
  }
}

export default About;
