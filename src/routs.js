const {
  sellSingleTicket,
  sellBulkTicket,
  findByUsername,
  findById,
  findAll,
  updateById,
  updateByUsername,
  deleteById,
  deleteByUsername,
  drawWinner,
  bulkDeleteByUser,
} = require("./controllers");

const router = require("express").Router();

// router.get('/t/:id')
// router.put('/t/:id')
// router.delete('/t/:id')

router.route("/t/:id").get(findById).put(updateById).delete(deleteById);

// router.get('/u/:username')
// router.put('/u/:username')
// router.delete('/u/:username')

router.route("/u/:username").get(findByUsername).put(updateByUsername).delete(deleteByUsername);

// router.post("/bulk", sellBulkTicket);
router.delete("/bulk/:username", bulkDeleteByUser)
router.get("/draw", drawWinner);

router.route("/").post(sellSingleTicket).get(findAll);

module.exports = router;
