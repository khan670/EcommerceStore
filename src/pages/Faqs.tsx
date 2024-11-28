import React from "react";
import PageSection from "../components/layout/PageSection";
import Heading from "../components/Heading";

import { faqs } from "../data/Faqs";
import Faq from "../components/layout/Faqs/Faq";
const Faqs: React.FC = () => {
  return (
    <>
      <PageSection pageHead="Faqs" />
      <Heading
        text="Frequently Asked Questions"
        className="text-center mt-10"
      />
      <div className="px-10 mt-10 flex flex-col gap-4">
        {faqs.map((data) => (
          <Faq data={data} />
        ))}
      </div>
    </>
  );
};

export default Faqs;
