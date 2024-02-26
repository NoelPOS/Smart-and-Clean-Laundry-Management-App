// Import the PostgreSQL client
const client = require('./db');

// Function to test the database connection
async function testDbConnection() {
    try {
        // Connect to the database
        await client.connect();
        console.log('Connected to the database');

        // Execute a test query
        const result = await client.query('SELECT * from customer');
        console.log(result.rows);
        

        // Disconnect from the database
        await client.end();
        console.log('Disconnected from the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}

// Call the function to test the database connection
testDbConnection();
