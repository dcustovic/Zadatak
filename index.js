const server = require('./api/server.js');
const PORT = 5000;

// defining port and listening to server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});