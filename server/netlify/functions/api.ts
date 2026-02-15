import serverless from "serverless-http";

import { createServer } from "../../app";

export const handler = serverless(createServer());
