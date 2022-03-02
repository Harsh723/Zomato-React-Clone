import React from "react";
import {
  HOME_PAGE_LOGO,
  HOME_PAGE_TOP_BANNER,
} from "../../constants/img-constants";
import Header from "../header/header";
import "./style.css";

const HomePage = () => (
  <>
    <TopBanner a="harsh" b={12} c d={12345} />
  </>
);

const TopBanner = ({ a, b, ...props }: any) => {
  const heading = "Discover the best food & drinks";
  console.log({ ...props });

  return (
    <div className="topBannerContainer">
      <link rel="preload" href={HOME_PAGE_TOP_BANNER} as="image" />
      {/* Add loading="lazy" only to images which are positioned below the fold. */}
      <img
        src={HOME_PAGE_TOP_BANNER}
        data-src={HOME_PAGE_TOP_BANNER}
        width="100%"
        height="100%"
        alt="home-page-top-banner"
        loading="eager"
      />
      <Header />
      <div className="logoContainer">
        <img
          src={HOME_PAGE_LOGO}
          data-src={HOME_PAGE_LOGO}
          alt="home-page-logo"
          loading="eager"
          height="100%"
          width="20%"
        />
        <h1 className="heading">{heading}</h1>
      </div>
    </div>
  );
};

export default HomePage;
