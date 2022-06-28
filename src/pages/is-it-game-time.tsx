/* eslint-disable */
import React, { useLayoutEffect } from "react";

import Layout from "components/Layout";
import Container from "components/Container";
import TitleSection from "components/TitleSection";

const MyWorkPage: React.FC = () => {
 
  const gameNightDate = new Date('2022-07-29T19:00:00')

  const currentDate = new Date()

  return (
    <Layout>
      <Container section>
        <TitleSection title="Is it game time yet?" center />
        <div className="uppercase mb-4 text-lg font-bold w-full text-left text-center">
          {currentDate > gameNightDate ? <h2>yes</h2> : <h2>no</h2>}
        </div>
      </Container>
    </Layout>
  );
};

export default MyWorkPage;
