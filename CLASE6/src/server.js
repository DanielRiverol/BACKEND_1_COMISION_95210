import app from "./app.js"
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";
const PORT = config.PORT


connectDB()
app.listen(PORT, () =>
  console.log(`Server runnig on port ${PORT} `),
);