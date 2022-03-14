import React from "react";
import {
  Header,
  Hero,
  Service,
  WorkSection,
  Business,
  Consultation,
  Footer,
} from "../../components";

const Landing = (props) => {
  return (
    <div className="content">
      <Header />
      <Hero />
      <Service />
      <WorkSection />
      <Business />
      <Consultation />
      <Footer />
    </div>
  );
};

export default Landing;
