const getOrders = 'Select * from orders';
const getOrdersWithCustomerAndRider = `select cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name
                                        from orders as ord
                                        inner join customer as cus on ord.customer_id = cus.customer_id
                                        left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id
                                        left join rider as return_table on ord.return_rider = return_table.rider_id;`;

const getRiders = 'Select * from rider';
const getRiderById = 'Select * from rider where rider_id = $1' //The $1 in the query represents a placeholder for the value that I will provide when executing the query.
const deleteRiderById = 'delete from rider where rider_id = $1'



const getFinsihOrders = `select cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name 
                        from orders as ord 
                        inner join customer as cus on ord.customer_id = cus.customer_id 
                        left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id 
                        left join rider as return_table on ord.return_rider = return_table.rider_id 
                        where ord.status = 'Finish'`;
 
const getOrderItemsById =   `select item_title, quantity, selling_price, quantity * selling_price as total_price
                        from order_items,item
                        where order_items.item_id = item.item_id and order_id = $1;`

const updatePickUpRider = `UPDATE Orders
                            SET pick_up_rider = $1 ,status = 'Rider Pick Up Ongoing'
                            WHERE order_id = $2;`

const updatePaymentWaiting = `Update Orders
                                SET status = 'Payment Waiting'
                                WHERE order_id = $1;`

const startLaundry = `Update Orders
                        SET status = 'Laundry Ongoing'
                        WHERE order_id = $1;`
const finishLaundry = `Update Orders
                        SET status = 'Laundry Finish'
                        WHERE order_id = $1;`
const updateReturnRider = `UPDATE Orders
                        SET return_rider = $1 ,status = 'Rider return'
                        WHERE order_id = $2;`

module.exports = {
    getOrders,
    getRiders,
    getRiderById,
    getOrdersWithCustomerAndRider,
    deleteRiderById,
    getFinsihOrders,
    getOrderItemsById,
    updatePickUpRider,
    updatePaymentWaiting,
    startLaundry,
    finishLaundry,
    updateReturnRider
}

