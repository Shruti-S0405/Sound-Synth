import { S3Client } from "@aws-sdk/client-s3";
import { config } from "../utils/env";

export const s3client = new S3Client({
  endpoint: config.S3_ENDPOINT_URL,
  credentials: {
    accessKeyId: config.S3_ACCESS_KEY,
    secretAccessKey: config.S3_SECRET_KEY,
  },
  region: config.S3_REGION,
});

