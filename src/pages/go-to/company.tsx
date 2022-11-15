import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const RedirectToLinkedin: React.FC = ({ url }: any) => {
  window.location.href = url;
  return null;
};

export async function getStaticProps(context: any) {
  return {
    props: {
      url: 'https://www.linkedin.com/company/m11r-software/',
    },
  };
}

export default RedirectToLinkedin;
