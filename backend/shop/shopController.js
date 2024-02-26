const client = require("../../db");
const queries = require("./shopQueries");
client.connect()
const getOrders = async (req, res) => {
    try {
        const results = await client.query(queries.getOrders);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error retrieving orders:', error.message);
        res.status(500).json({ error: 'Error retrieving orders' });
    }
};

const getRiders = async(req,res) => {
    try{
        const results = await client.query(queries.getRiders);
        res.status(200).json(results.rows)
    }
    catch (error) {
        console.error('Error retrieving riders:', error.message);
        res.status(500).json({ error: 'Error retrieving riders' });
    }
}

const getFinsihOrders = async (req,res) => {
    try{
        const results = await client.query(queries.getFinsihOrders);
        res.status(200).json(results.rows)
    }
    catch(error) {
        console.log('Error getting finsh errors: ', error.message);
        res.status(500).json({error: 'Error retrieving finish orders'})
    }
}
const getRiderById = async(req,res) => {
    const id = parseInt(req.params.id);
    try{
        const results = await client.query(queries.getRiderById, [id]);
        res.status(200).json(results.rows)
    }
    catch (error) {
        console.error('Error retrieving riders:', error.message);
        res.status(500).json({ error: 'Error retrieving riders' });
    }
}

const deleteRider = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await client.query(queries.deleteRiderById, [id]);
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Rider deleted successfully' });
        } else {
            res.status(404).json({ message: 'Rider not found' });
        }
    } catch (error) {
        console.error('Error deleting rider:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



const getOrdersWithCustomerAndRider = async(req,res) => {
    client.query(queries.getOrdersWithCustomerAndRider, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}






module.exports = {
    getOrders,
    getRiders,
    getRiderById,
    getOrdersWithCustomerAndRider,
    deleteRider,
    getFinsihOrders
}