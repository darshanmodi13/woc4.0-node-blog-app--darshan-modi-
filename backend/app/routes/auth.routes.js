const auth = require("../middleware/auth.middleware");

const express = require("express");

const router = express.Router();

//contoller
const controller = require("../controllers/auth.controller");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

/**
 * @swagger
 * components:
 *   schemas:
 *     success_response:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           description: The user ID.
 *           example: {}
 *         msg:
 *           type: string
 *           description: Success message
 *           example: Success Response
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     validation_response:
 *       type: object
 *       properties:
 *         err:
 *           type: object
 *           description: Error.
 *           example: {}
 *         msg:
 *           type: string
 *           description: Validation error
 *           example: Validation error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     add_blogger:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - password
 *         - email
 *         - user_name
 *         - profile_pic
 *       properties:
 *           first_name:
 *             type: string
 *             description : User First Name
 *             example: "John"
 *           last_name:
 *             type: string
 *             description : User Last Name
 *             example: "Khan"
 *           password:
 *             type: string
 *             description : User' Password
 *             example: "abcd"
 *           email:
 *             type: string
 *             description : User' Alternate Email
 *             example: "john.khan@gmail.com"
 *           user_name:
 *             type: string
 *             description : User' user name
 *             example: "john_dev"
 *           website:
 *             type: string
 *             description : User' website
 *             example: "devjohn.com"
 *           bio:
 *             type: string
 *             description : User' Bio
 *             example: "developer"
 *           profile_pic:
 *             type: string
 *             format: base64
 *             example: iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAANlBMVEX////+oIj9MwH8j0D9yYj+mYD9kkD7iwD9xX/9eUD9fEDod3fUAADqZz/9wXfpf3/oYj/oYDtmkz/QAAADN0lEQVR42uzcSVIDQQxE0cZgmsFM978sF2CFS1Jm1v9HeKGdFDqIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiDbq4fL/Hp+OrbreYfV8ni/HRt1ptZXW3VYbaS2w2kZridUmWousttBaZrWB1kKreK2lVuFai62itZZbBWsVWMVqlViFahVZRWqVWQVqFVrFaZVahWkVW0VplVsFaTVYxWi1WIVoNVlFaLVZBWg1WtlrtVqZazVbWWu1WxlrDVjZao1YmWoNWVlqjVkZag1a2WmNWplpDVtZaY1bGWkJWNloSViZaIlYWWjJWFloERERERERERERERHRMfhP5q9eg3/MXC9rewvexxRYxWqVWIVqFVlFapVZBWoVWsVplVqFaRVbRWmVWwVpNVjFaLVYhWg1WUVotVkFaDVa2Wu1WplrNVtZa7VbGWsNWNlqjViZag1ZWWqNWRlqDVrZaY1amWkNW1lpjVsZaQlY2WhJWJloiVhZaMlYGWgJWclrSVmJa4lZSWvJWQlrCVrJaklaiWqJWklqyVoJaglbyWlJW6lpvd/W9nEu7fOQ6uu2tu9zYVqDpa0lZyWsJWglqyVpJaolaiWpJWslqCVsJaclbSWmJW4lpSVvJaRlYCWjZWElomViJaFlYyWgZWQ1rmVlNaxlZjWqZWc1qGVoNaZlaTWkZWo1omVrNaBlbNWuZW3VrGVu1aplb9WoFWDVphVh1aQVYtWiFWPVoBVkVa4VZVWsFWZVqhVnVagVaFWmFWlVpBVqVaIVa7Ve60fsZpuIiIiIiIiI6LedOzdgIAiBIChfhvLPVkEcCzdsdQjl8kiSpNS+ftY0zXwe3+fH7Uy8RCvC6iVaIVav0IqxeoFWkNW4VpTVsFaY1ahWnNWgVqDVmFak1ZBWqNWIVqzVgFawVbtWtFWzVrhVq1a8VaPWAqs2rRVWTVpLrFq01lg1aC2yOq61yuqw1jKro1rrrA5qLbQ6prXS6pDWUqsjWmutDmgttirXWm1VrLXcqlRrvVWh1gVWZVpXWBVpXWJVonWNVYHWRVaPta6y+nx+ftZIkiRJkiRJkiRJkiRJkiRJkiRJkiTppv5zwutIm7XgdgAAAABJRU5ErkJggg==
 */

/**
 * @swagger
 * /api/auth/create:
 *   post:
 *     tags : [Auth]
 *     description : Registration For User
 *     summary: Registration
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/add_blogger'
 *     responses:
 *       201:
 *         description: Blogger Added Successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/success_response'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/validation_response'
 *       404:
 *         description: Not found
 */

router.post("/create", [auth.isNotLoggedIn], controller.create);

/**
 * @swagger
 * components:
 *   schemas:
 *     signin_schema:
 *       type: object
 *       required:
 *         - password
 *         - user_name
 *       properties:
 *           password:
 *             type: string
 *             description : User' Password
 *             example: "abcd"
 *           user_name:
 *             type: string
 *             description : User' user name
 *             example: "john_dev"
 */

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     tags : [Auth]
 *     description : User Login
 *     summary: User Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signin_schema'
 *     responses:
 *       201:
 *         description: Blogger Added Successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/success_response'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/validation_response'
 *       404:
 *         description: Not found
 */

router.post("/signin", [auth.isNotLoggedIn], controller.signin);

module.exports = router;
