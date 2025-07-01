// import axios from "axios"
// import { QUOTE_AUTHOR_URL } from "../config";
// import { useState } from "react";

// export const QuotAuthor = () => {
//     const [QuoteAuthor, setQuoteAuthor] = useState<string>("");
//     axios.get(`${QUOTE_AUTHOR_URL}`)      
//     .then(response => {
//         setQuoteAuthor(response.data.quote);
//     })

// return {
//     QuoteAuthor
// }
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { QUOTE_AUTHOR_URL, API_KEY } from "../config"; // adjust path as needed

export const useQuotAuthor = () => {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(QUOTE_AUTHOR_URL, {
          headers: {
            "X-Api-Key": API_KEY
          }
        });

        const data = response.data;

        if (Array.isArray(data) && data.length > 0 && data[0].quote) {
          setQuote(data[0].quote);
        } else {
          console.warn("Unexpected API response:", data);
        }

      } catch (error) {
        console.error("Failed to fetch quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return quote;
};
