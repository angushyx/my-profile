import React from "react";
import { Helmet } from "react-helmet";
import { Hero } from "./components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Profile - Angus Huang</title>
        <meta
          name="description"
          content="Hi! I'm Angus - a web developer, technical writer and a passionate learner. I love participating in hackathons,and I my habit is diving and fitness."
        />
        <meta property="og:title" content="Angus Huang" />{" "}
        <meta
          property="og:description"
          content="Hi! I'm Angus - a web developer, technical writer and a passionate learner. I love participating in hackathons,and I my habit is diving and fitness."
        />{" "}
        <meta
          property="og:image"
          content="https://photos.google.com/album/AF1QipMXbRzOF4iZ2PXW1jDLVpvY9xX6WTVGYl0iWojz/photo/AF1QipM4sxANXKxliTgbvC6pw3X2ipt0gY6D9PLR2Tpz"
        />
        <meta property="facebook:title" content="黃奕翔 Yi-Xaing Huang" />
        <meta
          property="facebook:title"
          content="https://photos.google.com/album/AF1QipMXbRzOF4iZ2PXW1jDLVpvY9xX6WTVGYl0iWojz/photo/AF1QipM4sxANXKxliTgbvC6pw3X2ipt0gY6D9PLR2Tpz"
        />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
