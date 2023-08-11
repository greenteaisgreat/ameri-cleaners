import React from "react";
import { faq } from "../constants";

const Faq = () => {
  return (
    <div id="faq">
      <div className="font-poppins font-bold text-4xl md:text-5xl leading-loose mb-6">
        FAQ
      </div>
      <div>
        {faq.map((query) => (
          <div key={query.id} className={`font-poppins mb-8`}>
            <p className="font-semibold text-gray-800 mb-2">{query.question}</p>
            <p className="text-gray-800">{query.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
