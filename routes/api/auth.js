const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");
const router = express.Router();

// signup / register
router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

// signin / login
router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

// logout
router.get("/users/current", authenticate, ctrl.getCurrent);

// get current user
router.post("/users/logout", authenticate, ctrl.logout);

router.patch(
  "/users/current/subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateSubscription
);

// обновление аватара залогиненным юзером
router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
