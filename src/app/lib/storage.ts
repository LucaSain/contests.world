import { SignedPostPolicyV4Output } from "@google-cloud/storage";
import { Storage } from "@google-cloud/storage";
const storage = new Storage({
  projectId: process.env.PROJECT_ID,
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
});
const bucket = storage.bucket(process.env.BUCKET_NAME);

export default bucket;
