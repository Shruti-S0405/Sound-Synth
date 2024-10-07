import axios from "axios";

import { config } from "../utils/env";

export const summarize = async (text: string) => {
  let reqData = JSON.stringify({
    contents: [
      {
        parts: [
          {
            text:
              "Summerize the text for me as a small summary so that I can grasp the key points properly" +
              text,
          },
        ],
      },
    ],
  });

  let reqConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url:
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
      config.GEMINI_API_KEY,
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  };

  const { data } = await axios(reqConfig);
  return data.candidates[0].content.parts[0].text;
};

