/* eslint-disable */
import React, { useLayoutEffect } from "react";

import Layout from "components/Layout";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";

const MyWorkPage: React.FC = () => {
  const numberDetails = {
    twitch: { target: 20200, current: 0 },
    tiktok: { target: 285100, current: 0 },
    instagram: { target: 28000, current: 0 },
    youtube: { target: 600, current: 0 },
  };

  useLayoutEffect(() => {
    for (const key in numberDetails) {
      if (Object.prototype.hasOwnProperty.call(numberDetails, key)) {
        const numberDetail: any = numberDetails[key];
        setupInterval(key, numberDetail);
      }
    }
  }, []);

  function setupInterval(forId: string, details: any) {
    const rollDuration = 5000;
    const updateDelta = 100;

    const totalIterations = Math.floor(rollDuration / updateDelta);
    const increasePerIteration = details.target / totalIterations;
    let currentIteration = 0;

    const elem: Element = document.getElementById(forId);

    const intervalId = setInterval(() => {
      currentIteration += 1;
      // console.log({ currentIteration, forId });

      details.current += increasePerIteration;
      elem.textContent = ` ${Math.round(details.current)}`;

      if (currentIteration >= totalIterations) {
        console.log(`clearing ${forId}`);

        elem.textContent = ` ${details.target}`;

        clearInterval(intervalId);
      }
    }, updateDelta);
  }

  return (
    <Layout>
      <Container section>
        <TitleSection title="Subscriber numbers ticker" center />

        <div className="flex flex-col w-full">
          <p>
            Numbers tick up to roughly your current total on each platform, I
            check your pages to find the numbers so it doesn't automatically
            keep track.
          </p>
          <p>
            Twitch
            <span id="twitch">0</span>
          </p>
          <p>
            Tiktok
            <span id="tiktok">0</span>
          </p>
          <p>
            Instragram
            <span id="instagram">0</span>
          </p>
          <p>
            Youtube
            <span id="youtube">0</span>
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default MyWorkPage;
