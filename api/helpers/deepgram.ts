import { createClient} from "@deepgram/sdk";
import { config } from "../utils/env";

const deepgram = createClient(config.DEEPGRAM_API_KEY);

export const transcribeAudioFromUrl = async (url: string) => {
  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    { url },
    { smart_format: true, model: "nova-2", language: "en-US" },
  );

  if (error) throw error;

  return result.results.channels[0].alternatives[0].transcript;
};



