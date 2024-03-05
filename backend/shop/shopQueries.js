const getcusemail = 'Select customer_email from customer';
const checkEmail = 'select s from customer s where s.customer_email = $1';
const addemail = 'insert into customer (customer_email,customer_name,customer_number,password,customer_address) values ($1,$2,$3,$4,$5)';
const addcuslogin = 'select * from customer where customer_email = $1';

const updateTimSchedule = `update time_schedule
                            set customer_id = $1
                            where pick_up_date = $2 and pick_up_time = $3`;


const placeOrder = `Insert into orders(customer_id,pick_up_date, pick_up_time, status)
values ($1, $2, $3, $4);`

const getCustomerById = `Select * from customer where customer_id = $1`

const getOrderIdAtPaymentWaitingStage = `SELECT order_id
                                            FROM orders
                                            WHERE customer_id = $1 and status = 'Payment Waiting'
                                            ORDER BY order_id DESC
                                            LIMIT 1;`

const updatePaymentConfirm = `Update orders 
                                set status = 'Payment Confirm'
                                where order_id = $1;`

const getcusinfo = 'select * from customer where customer_id = $1';
const updatecusinfo = 'update customer set customer_name=$1::text,customer_number = $2::text, customer_address=$3::text where customer_id=$4::integer';
const deleteaccount = 'delete from customer where customer_id = $1';
const getOrderHistoryByid = 'select * from orders where customer_id = $1';

//Shop Queries

const getOrders = 'Select * from orders';
const getOrdersWithCustomerAndRider = `select cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name
                                        from orders as ord
                                        inner join customer as cus on ord.customer_id = cus.customer_id
                                        left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id
                                        left join rider as return_table on ord.return_rider = return_table.rider_id;`;

const getRiders = 'Select * from rider';
const getRiderById = 'Select * from rider where rider_id = $1' //The $1 in the query represents a placeholder for the value that I will provide when executing the query.

const deleteRiderById = 'delete from rider where rider_id = $1'

const getFinsihOrders = `select cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name, ord.return_date, ord.return_time,ord.pick_up_report,ord.return_report
                        from orders as ord 
                        inner join customer as cus on ord.customer_id = cus.customer_id 
                        left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id 
                        left join rider as return_table on ord.return_rider = return_table.rider_id 
                        where ord.status = 'finish'`;
 
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

const getTimeSchedule = `SELECT * From time_schedule
                        ORDER BY pick_up_date DESC;`


const getItems = `SELECT * FROM ITEM 
                    ORDER BY price;`
const createTimeSlot = `Insert into time_schedule (pick_up_date, pick_up_time) values ($1,$2)`

const placeOrderItems = `insert into order_items (order_id, quantity, selling_price, item_id)
                        values ($1,$2,$3,$4);`

//Rider
const signupRider = `INSERT INTO Rider (rider_name, rider_email, rider_number)
VALUES ($1, $2, $3);`

const getPickUpOrder = `SELECT * FROM ORDERS where pick_up_rider = $1 and status = 'Rider Pick Up Ongoing';`

const getReturnOrder = `SELECT * FROM ORDERS where return_rider = $1 and status = 'Rider return';`

const getPickUpOrderDetail = `select ord.pick_up_rider,ord.return_rider,  cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name
                                from orders as ord
                                inner join customer as cus on ord.customer_id = cus.customer_id
                                left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id
                                left join rider as return_table on ord.return_rider = return_table.rider_id
                                where order_id = $1;`

const getReturnOrderDetail = `select ord.pick_up_rider,ord.return_rider, cus.customer_name, cus.customer_number, cus.customer_address, ord.status, ord.order_id,ord.pick_up_date, ord.pick_up_time, pick_up_table.rider_name as pick_up_rider_name, return_table.rider_name as return_rider_name
                                from orders as ord
                                inner join customer as cus on ord.customer_id = cus.customer_id
                                left join rider as pick_up_table on ord.pick_up_rider = pick_up_table.rider_id
                                left join rider as return_table on ord.return_rider = return_table.rider_id
                                where order_id = $1;`

const updateOrderStatus = `update orders set status = 'Rider Pick Up Finish' where order_id = $1;`

const updateReturnOrderStatus = `update orders set status = 'finish' where order_id = $1;`

const updateOrderReport = `update orders set pick_up_report = $2 where order_id = $1;`
const updateReturnOrderReport = `update orders set return_report = $2, return_date = $3, return_time = $4 where order_id = $1;`

const updateRiderInfo = `update rider set rider_name = $1 ,rider_number = $2, rider_email = $3
 where rider_id = $4;`

module.exports = {
    //Customer
    getcusemail,
    checkEmail,
    addemail,
    addcuslogin,
    placeOrder,
    updateTimSchedule,
    getCustomerById,
    getOrderIdAtPaymentWaitingStage,
    updatePaymentConfirm,
    getcusinfo,
    updatecusinfo,
    deleteaccount,
    getOrderHistoryByid,
    

    //Shop
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
    updateReturnRider,
    getTimeSchedule,
    createTimeSlot,
    getItems,
    placeOrderItems,

    //Riders
    signupRider,
    getPickUpOrder,
    getPickUpOrderDetail,
    updateOrderStatus,
    updateOrderReport,
    updateRiderInfo,
    getReturnOrderDetail,
    getReturnOrder,
    updateReturnOrderStatus,
    updateReturnOrderReport,
}

