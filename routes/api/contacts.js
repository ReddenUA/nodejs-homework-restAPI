const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const {
  isValidId,
  authMiddleware,
  validation,
  ctrlWrapper,
} = require("../../middlewares");
const { schemas } = require("../../models");

const router = express.Router();

router.get("/", authMiddleware, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", authMiddleware, isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  authMiddleware,
  validation(schemas.addJoiSchema),
  ctrlWrapper(ctrl.add)
);

router.delete("/:contactId",authMiddleware,  isValidId, ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  authMiddleware,
  validation(schemas.addJoiSchema),
  isValidId,
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  authMiddleware,
  validation(schemas.updateFavoriteSchema),
  isValidId,
  ctrlWrapper(ctrl.updateStatus)
);

module.exports = router;
