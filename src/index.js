const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
res.send("Hello, World!");
});
// This block now checks if the file is being run directly
// before starting the server. This prevents the server from
// starting automatically when the file is imported by our tests.
if (require.main === module) {
app.listen(port, () => {
console.log("Server is running at http://localhost:${port}");
});
}
// Export the app instance for testing purposes
module.exports = app;