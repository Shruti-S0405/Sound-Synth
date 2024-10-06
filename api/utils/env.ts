import { z } from 'zod';

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Env{}
    }
}

const envSchema = z.object({
	// Application config
	PORT: z.string(),

	// Database config
	MONGODB_URL: z.string(),

	// 3rd party api config
	DEEPGRAM_API_KEY: z.string(),
	GEMINI_API_KEY: z.string(),

	// S3 config 
    S3_BUCKET: z.string(),
    S3_REGION: z.string(),
    S3_ACCESS_KEY: z.string(),
    S3_SECRET_KEY: z.string(),
    S3_ENDPOINT_URL: z.string(),
    S3_PUBLIC_URL: z.string()
});


type Env = z.infer<typeof envSchema>

export const config = envSchema.parse(process.env)

