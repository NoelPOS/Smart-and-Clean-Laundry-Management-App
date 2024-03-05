const {Router} = require("express")
const router = Router()
const shopController = require("./shopController")

router.get("/cusemail", shopController.getcusemail)
router.post("/getemail", shopController.addemail)
router.post("/cuslogin", shopController.addcuslogin)
router.post("/placeOrder", shopController.placeOrder)
router.put("/updateTimeSchedule", shopController.updateTimeSchedule)
router.get("/getCustomerById/:id", shopController.getCustomerById)
router.get("/getOrderId/:id", shopController.getOrderIdAtPaymentWaitingStage)
router.put("/updatePaymentConfirm/:id", shopController.updatePaymentConfirm)
router.get("/customer/:id", shopController.getcusinfo)
router.put("/updatecustomer/:id" , shopController.updatecusinfo)
router.delete("/cusdelete/:id" , shopController.deleteaccount)
router.get("/getcusorderhistory/:id" , shopController.getcusorderhistory)



router.get("/orders", shopController.getOrders)
router.get("/riders", shopController.getRiders)
router.get("/riders/:id", shopController.getRiderById)
router.get("/fullOrders", shopController.getOrdersWithCustomerAndRider)
router.get("/finishOrders", shopController.getFinsihOrders)
router.delete("/rider/:id", shopController.deleteRider)

router.get("/getOrderItems/:id", shopController.getOrderItemsById)
router.put("/pickUpAssign/:id", shopController.updatePickUpRider)
router.put("/paymentWaiting/:id", shopController.updatePaymentWaiting)
router.put("/startLaundry/:id", shopController.startLaundry)
router.put("/finishLaundry/:id", shopController.finishLaundry)
router.put("/returnRiderAssign/:id", shopController.updateReturnRider)
router.get("/time_schedule", shopController.getTimeSchedule)
router.post("/createTimeSlot", shopController.createTimeSlot)
router.get("/getItems", shopController.getItems)
router.post("/placeOrderItems", shopController.placeOrderItems)

//Riders
router.post('/rider/signup', shopController.signupRider)
router.post('/rider/login', shopController.LogInRider)
router.get('/riderorders/:id', shopController.getRiderOrder)
router.get('/returnriderorders/:id', shopController.getReturnRiderOrder)
router.get('/riderorders/orderDetail/:id', shopController.getRiderOrderDetail)
router.put(
  '/riderorders/orderDetail/orderstatus/:id',
  shopController.updateOrderStatus
)
router.put(
  '/riderorders/orderDetail/returnstatus/:id',
  shopController.updateReturnOrderStatus
)
router.put(
  '/riderorders/orderDetail/orderstatus/orderreport/:id',
  shopController.updateOrderReport
)
router.put(
  '/riderorders/orderDetail/orderstatus/returnorderreport/:id',
  shopController.updateReturnOrderReport
)
router.put('/updaterider/:id', shopController.updateRiderInfo)


module.exports = router



