const getOrders = 'Select * from orders';
const getOrdersWithCustomerAndRider = 'select cus.customer_name, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name from orders as ord inner join customer as cus on ord.customer_id = cus.customer_id left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id left join rider as return_table on ord.return_rider = return_table.rider_id';

const getRiders = 'Select * from rider';
const getRiderById = 'Select * from rider where rider_id = $1' //The $1 in the query represents a placeholder for the value that I will provide when executing the query.
const deleteRiderById = 'delete from rider where rider_id = $1'



const getFinsihOrders = `select cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name from orders as ord inner join customer as cus on ord.customer_id = cus.customer_id left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id left join rider as return_table on ord.return_rider = return_table.rider_id where ord.status = 'Finish'`;

module.exports = {
    getOrders,
    getRiders,
    getRiderById,
    getOrdersWithCustomerAndRider,
    deleteRiderById,
    getFinsihOrders
}