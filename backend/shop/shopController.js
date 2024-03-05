const client = require("../../db");
const queries = require("./shopQueries");
client.connect()

const getcusemail = async(req,res) => {
    await client.query(queries.getcusemail, (error,results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    })
 }

 const getOrderIdAtPaymentWaitingStage = async (req,res) => {
    const id = parseInt(req.params.id);
    try{
        const results = await client.query(queries.getOrderIdAtPaymentWaitingStage , [id])
        res.status(200).send(results.rows)
    }catch(err){
        res.status(500).send(err)
    }
 }

 const updatePaymentConfirm = async(req,res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await client.query(queries.updatePaymentConfirm, [id]);
        res.status(200).send("Customer has updated the payment.")
    }catch(err) {
        res.status(500).send("Customer cannot update the payment: "+err.message);
    }
 }

 

 const getCustomerById = async (req,res) => {
    const id = parseInt(req.params.id);
    try{
        const results = await client.query(queries.getCustomerById , [id])
        res.status(200).send(results.rows)
    }catch(err){
        res.status(500).send(err)
    }
 }

 const addemail = async (req,res) => {
        const { email,name,phone,password,location } = req.body;
    try {
        const checkResult = await client.query(queries.checkEmail, [email]);
        if (checkResult.rows.length) {
            res.status(400).send("Email already exists");
        } else {
            await client.query(queries.addemail, [email,name,phone,password,location]);
            res.status(201).send("Customer infos added successfully");
            console.log("Customer infos added");
        }
    } catch (error) {
        console.error('Error adding customer infos:', error.message);
        res.status(500).json({ error: 'Error adding customer infos' });
    }
 };

 const placeOrder = async (req,res) => {
    const { customer_id,pick_up_date,pick_up_time,status } = req.body;
    try {
            const result = await client.query(queries.placeOrder, [customer_id,pick_up_date,pick_up_time,status]);
            res.status(201).send("Order placed successfully");
    }
    catch (error) {
        console.error('Error placing orders:', error.message);
        res.status(500).json({ error: 'error placing order' });
    }
};

const updateTimeSchedule = async (req,res) => {
    const {customer_id, pick_up_date, pick_up_time} = req.body;

    try{
        const result = await client.query(queries.updateTimSchedule, [customer_id,pick_up_date,pick_up_time]);
        res.status(200).send('Update successfully')
    }
    catch(error) {
        res.status(500).send(error)
    }
}

//  const addlocation =  async (req,res) => {
//     const {location} = req.body;
//     client.query(queries.addlocation,[location], (error,results)=>{
//     if(error) throw error;
//     red.status(201).send("Location added successfully");
//     console.log("location added")
// })

//  }

const addcuslogin = async(req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user with provided email exists
        const userResult = await client.query("SELECT * FROM customer WHERE customer_email = $1", [email]);
        const user = userResult.rows[0];

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Compare passwords
        if (user.password === password) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Invalid password' });
        }

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getcusinfo = async(req,res) => {
  const id = parseInt(req.params.id);
  try{
      const results = await client.query(queries.getcusinfo, [id]);
      res.status(200).json(results.rows)
  }
  catch (error) {
      console.error('Error retrieving riders:', error.message);
      res.status(500).json({ error: 'Error retrieving riders' });
  }
}

const updatecusinfo = async (req, res) => {
  const customerId = req.params.id;
  const { name, phoneNumber, location } = req.body;

  try {
      // Check if the customer exists
      const customerExistsResult = await client.query(queries.getcusinfo, [customerId]);

      if (customerExistsResult.rows.length === 0) {
          return res.status(404).json({ message: 'Customer not found' });
      }

      // Construct the SET clause dynamically based on the provided fields
      const setClause = [];
      const values = [];

      if (name) {
          setClause.push('customer_name');
          values.push(name);
      }

      if (phoneNumber) {
          setClause.push('customer_number');
          values.push(phoneNumber);
      }

      if (location) {
          setClause.push('customer_address');
          values.push(location);
      }

      // Construct the SQL update statement
      const updateQuery = `UPDATE customer SET ${setClause.map((clause, index) => `${clause} = $${index + 1}`).join(', ')} WHERE customer_id = $${setClause.length + 1}`;

      // Update the customer information
      await client.query(updateQuery, [...values, customerId]);

      res.status(200).json({ message: 'Customer information updated successfully' });
  } catch (error) {
      console.error('Error updating customer information:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteaccount = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const result = await client.query(queries.deleteaccount, [id]);
      if (result.rowCount > 0) {
          res.status(200).json({ message: 'Account deleted successfully' });
      } else {
          res.status(404).json({ message: 'Account not found' });
      }
  } catch (error) {
      console.error('Error deleting account:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
}

const getcusorderhistory = async(req,res) => {
  const id = parseInt(req.params.id);
try {
  const results = await client.query(queries.getOrderHistoryByid, [id]);
  res.status(200).json(results.rows);
} catch (error) {
  console.error('Error retrieving order history for customer:', error.message);
  res.status(500).json({ error: 'Error retrieving order history' });
}
}


//Shop




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

const getTimeSchedule = async (req, res) => {
    try {
        const results = await client.query(queries.getTimeSchedule);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error retrieving time schedule:', error.message);
        res.status(500).json({ error: 'Error retrieving time schedule' });
    }
};

const createTimeSlot = async (req, res) => {
    const {pick_up_date, pick_up_time} = req.body;
    try{
        const result = await client.query(queries.createTimeSlot, [pick_up_date,pick_up_time]);
        res.status(200).send("Time Slot is created.");
    }
    catch(error) {
        console.log('Error Creating Time Slot', error.message)
        res.status(500).json({error: 'Error Placing order.'})
    }
}

const getItems = async (req, res) => {
    try {
        const results = await client.query(queries.getItems);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error retrieving time schedule:', error.message);
        res.status(500).json({ error: 'Error retrieving time schedule' });
    }
};

const placeOrderItems = async (req, res) => {
    const {order_id, quantity, selling_price, item_id} = req.body;
    try{
        const result = await client.query(queries.placeOrderItems, [order_id, quantity, selling_price, item_id]);
        res.status(200).send("Order items are placed.");
    }
    catch(error) {
        console.log('Error Creating Order items.', error.message)
        res.status(500).json({error: 'Error Placing order items.'})
    }
}






const getOrdersWithCustomerAndRider = async(req,res) => {
    client.query(queries.getOrdersWithCustomerAndRider, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

//Riders
const signupRider = async (req, res) => {
    const { riderName, riderEmail, riderNumber, rider_password } = req.body
  
    try {
      const result = await client.query(
        'INSERT INTO Rider(rider_name, rider_email, rider_number, rider_password) VALUES($1, $2, $3, $4) RETURNING rider_name, rider_email, rider_number, rider_password',
        [riderName, riderEmail, riderNumber, rider_password]
      )
  
      res.status(201).send(result.rows[0])
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const LogInRider = async (req, res) => {
    const { username, password } = req.body
  
    try {
      const { rows } = await client.query(
        'SELECT * FROM RIDER WHERE rider_email = $1',
        [username]
      )
      if (rows.length > 0) {
        res.send(rows[0])
      } else {
        res.status(400).send('Invalid Credentials')
      }
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const getRiderOrder = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      const { rows } = await client.query(queries.getPickUpOrder, [id])
      if (rows.length > 0) {
        res.send(rows)
      } else {
        res.status(400).send('Cannot access')
      }
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const getReturnRiderOrder = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      const { rows } = await client.query(queries.getReturnOrder, [id])
      if (rows.length > 0) {
        res.send(rows)
      } else {
        res.status(400).send('Cannot access')
      }
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const getRiderOrderDetail = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      const { rows } = await client.query(queries.getPickUpOrderDetail, [id])
      if (rows.length > 0) {
        res.send(rows)
      } else {
        res.status(400).send('Cannot access')
      }
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const updateOrderStatus = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      await client.query(queries.updateOrderStatus, [id])
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  const updateReturnOrderStatus = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      await client.query(queries.updateReturnOrderStatus, [id])
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const updateOrderReport = async (req, res) => {
    const id = parseInt(req.params.id)
    const { reason } = req.body
    try {
      await client.query(queries.updateOrderReport, [id, reason])
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const updateReturnOrderReport = async (req, res) => {
    const id = parseInt(req.params.id)
    const { reason, date, time } = req.body
    try {
      await client.query(queries.updateReturnOrderReport, [
        id,
        reason,
        date,
        time,
      ])
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const updateRiderInfo = async (req, res) => {
    const id = parseInt(req.params.id)
    const { rider_name, rider_number, rider_email } = req.body
    try {
      const result = await client.query(queries.updateRiderInfo, [
        rider_name,
        rider_number,
        rider_email,
        id,
      ])
      if (result.rowCount === 0) {
        // No rows were updated, which might mean the rider was not found
        return res.status(404).json({ message: 'Rider not found' })
      }
      res.json({ message: 'Rider updated successfully' })
    } catch (err) {
      console.error(err)
      res.status(500).send('Server error')
    }
  }






module.exports = {
    //Customer
    getcusemail,
    addemail,
    addcuslogin,
    placeOrder,
    updateTimeSchedule,
    getCustomerById,
    getOrderIdAtPaymentWaitingStage,
    updatePaymentConfirm,
    getcusinfo,
    updatecusinfo,
    deleteaccount,
    getcusorderhistory,


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
    finishLaundry,
    getTimeSchedule,
    createTimeSlot,
    getItems,
    placeOrderItems,

    //Riders
    signupRider,
    LogInRider,
    getRiderOrder,
    getRiderOrderDetail,
    updateOrderStatus,
    updateOrderReport,
    updateRiderInfo,
    updateReturnOrderStatus,
    getReturnRiderOrder,
    updateReturnOrderReport,
}