const client = require("../../db");
const queries = require("./shopQueries");
client.connect()
const getOrders = async (req, res) => {
    try {
        const results = await client.query(queries.getOrdersWithCustomerAndRider);
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

const getOrderItemsById = async (req, res) => {
    const id = parseInt(req.params.id);
    try{
        const results = await client.query(queries.getOrderItemsById, [id]);
        res.status(200).json(results.rows)
    }
    catch (error) {
        console.error('Error retrieving order items:', error.message);
        res.status(500).json({ error: 'Error retrieving order items' });
    }
}

const updatePickUpRider = async (req, res) => {
    const id = parseInt(req.params.id);
    const rid = parseInt(req.body.pick_up_rider);

    if (isNaN(rid)) {
        return res.status(400).send("Invalid value for rider ID");
    }

    try {
        const results = await client.query(queries.updatePickUpRider, [rid, id]);
        res.status(200).send("Rider Pick Up successfully.");
    } catch (error) {
        res.status(500).send("Rider update failed: " + error.message);
    }
};
const updatePaymentWaiting = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const results = await client.query(queries.updatePaymentWaiting, [id]);
        res.status(200).send("Payment slip successfully sent to Customer.");
    } catch (error) {
        res.status(500).send("Payment slip sending failed: " + error.message);
    }
};



const startLaundry = async (req,res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await client.query(queries.startLaundry, [id]);
        res.status(200).send("Laundry has started.")
    }catch(err) {
        res.status(500).send("Laundry cannot start: "+err.message);
    }
}
const finishLaundry = async (req,res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await client.query(queries.finishLaundry, [id]);
        res.status(200).send("Laundry has finished.")
    }catch(err) {
        res.status(500).send("Laundry cannot finish: "+err.message);
    }
}

const updateReturnRider = async (req, res) => {
    const id = parseInt(req.params.id);
    const rid = parseInt(req.body.return_rider);

    if (isNaN(rid)) {
        return res.status(400).send("Invalid value for rider ID");
    }

    try {
        const results = await client.query(queries.updateReturnRider, [rid, id]);
        res.status(200).send("Rider return assign successfully.");
    } catch (error) {
        res.status(500).send("Rider return assign failed: " + error.message);
    }
};





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
    getFinsihOrders,
    getOrderItemsById,
    updatePickUpRider,
    updateReturnRider,
    updatePaymentWaiting,
    startLaundry,
    finishLaundry
}