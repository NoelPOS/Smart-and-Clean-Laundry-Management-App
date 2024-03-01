const {Router} = require("express")
const router = Router()
const shopController = require("./shopController")

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

module.exports = router



