import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import Domains from "../components/Home/Domains";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";
import Preloader from "../components/Home/Preloader";
import Venue from "../components/Home/Venue";
import Sponsor from "../components/Sponsor";
{/* import Countdown from "../components/Countdown"; */}
 import CountdownTimer from "../components/CountdownTimer"; 
import "animate.css";

const targetDate = "2024-08-29T10:00:00"; // Replace with your target date

const index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import("wow.js").then((WOW) => {
      new WOW.default().init();
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div >
    <Layout>
      {/* Animation */}
      <Preloader />
      <Landing />
      {/* <Countdown /> */}
      {isMounted && <CountdownTimer targetDate={targetDate} />}
      {/* About */}
      <Wihts />
      <Journey />
      <Domains />
      <Schedule />
      <Venue />
      
      {/* <Tracks /> */}
      <Sponsor />
      {/* <WhySponsor /> */}
      {/* <Organiser /> */}
      <FAQS />
    </Layout>
      </div>
  );
};

export default index;
