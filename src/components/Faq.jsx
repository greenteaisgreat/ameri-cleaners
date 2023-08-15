import React from "react";
import { faq } from "../constants";

const Faq = () => {
  return (
    <div id="faq" className="py-10 sm:px-16 px-6">
      <div className="font-poppins font-bold text-4xl md:text-5xl leading-loose mb-6 text-green-900">
        FAQ
      </div>
      <div>
        {faq.map((query) => (
          <div key={query.id} className={`font-poppins mb-8`}>
            <p className="font-semibold text-green-900 mb-2">{query.question}</p>
            <p className="text-green-900">{query.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
