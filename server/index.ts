import "dotenv/config";
import { createServer } from "./app";

const port = process.env.PORT || 3001;
const app = createServer();

app.listen(port, () => {
  console.log(`🔧 Server running on http://localhost:${port}`);
});
