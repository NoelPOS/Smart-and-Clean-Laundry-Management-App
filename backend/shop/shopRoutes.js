const {Router} = require("express")
const router = Router()
const shopController = require("./shopController")

router.get("/orders", shopController.getOrders)
router.get("/riders", shopController.getRiders)
router.get("/riders/:id", shopController.getRiderById)
router.get("/fullOrders", shopController.getOrdersWithCustomerAndRider)
router.get("/finishOrders", shopController.getFinsihOrders)
router.delete("/rider/:id", shopController.deleteRider )

module.exports = router



