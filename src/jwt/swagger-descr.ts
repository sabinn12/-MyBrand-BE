  
    /**
 * @swagger
 * /api/v1/blogs:
 *  post:
 *     security:
 *       - Authorization: []
 *     summary: Create a blog
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *              - content
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *                format: binary
 *              content:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Server Err
 */

    /**
 * @swagger
 * /api/v1/blogs:
 *   get:
 *     summary: Get all blogs
 *     description: Get  a list of blogs
 *     responses:
 *       200:
 *         description: list of blogs
 *         content:
 *           application/json:
 *             schema:
 */

       /**
 * @swagger
 * /api/v1/blogs/65fd4372a571556c86231f50:
 *   get:
 *     summary: Get single blog
 *     description: Get list of a single blog
 *     responses:
 *       200:
 *         description: List of blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


    /**
 * @swagger
 * /api/v1/brand/users/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and returns a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 */

           /**
 * @swagger
 * /api/v1/brand/users:
 *  post:
 *     summary: User register
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - email
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      201:
 *        description: User Registered
 *      500:
 *        description: Server Err
 */

     /**
 * @swagger
 * '/api/v1/blogs/65fd4372a571556c86231f50':
 *  put:
 *     security:
 *       - Authorization: []
 *     summary: Update a blog
 *     requestBody:
 *      required: false
 *      content:
 *       multipart/form-data:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *              - content
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *                format: binary
 *              content:
 *                type: string
 *     responses:
 *      201:
 *        description: Blog Updated
 *      500:
 *        description: Server Error
 */

       /**
 * @swagger
 * /api/v1/blogs/65fd4372a571556c86231f50:
 *   delete:
 *     security:
 *       - Authorization: []
 *     summary: Delete single blog
 *     description: Delete a blog
 *     responses:
 *       200:
 *         description: Blog deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */  

           /**
 * @swagger
 * /api/v1/blogs/65fd4372a571556c86231f50/comments:
 *  post:
 *     summary: Create a comment
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - visitor
 *              - coment
 *            properties:
 *              visitor:
 *                type: string
 *              coment:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Server Error
 */

   /**
 * @swagger
 * /api/v1/blogs/65fd4372a571556c86231f50/comments:
 *   get:
 *     summary: Get all comments
 *     description: Get all comments
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 */

           /**
 * @swagger
 * /api/v1/blogs/65fd4372a571556c86231f50/likes:
 *  post:
 *     summary: Create a like
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - like
 *            properties:
 *              like:
 *                type: boolean
 *     responses:
 *      201:
 *        description: Like Created
 *      500:
 *        description: Server Error
 */
   /**
 * @swagger
 * /api/v1/blogs/65fd4372a571556c86231f50/likes:
 *   get:
 *     summary: Get all likes
 *     description: Getting all likes
 *     responses:
 *       200:
 *         description: List of likes
 *         content:
 *           application/json:
 *             schema:
 */
            /**
 * @swagger
 * /api/v1/brand/querries:
 *  post:
 *     summary: Posting querries
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - visitor
 *              - message
 *            properties:
 *              visitor:
 *                type: string
 *              message:
 *                type: string
 *     responses:
 *      201:
 *        description: Query Created
 *      500:
 *        description: Server Err
 */

   /**
 * @swagger
 * /api/v1/brand/querries:
 *   get:
 *     security:
 *       - Authorization: []
 *     summary: Get all querries
 *     description: Get all querries
 *     responses:
 *       200:
 *         description: List of querries
 *         content:
 *           application/json:
 *             schema:
 */

 /**
 * @swagger
 * /api/v1/brand/querries/65fd454309043cec61d88691:
 *   delete:
 *     security:
 *       - Authorization: []
 *     summary: Delete querries
 *     description: Delete querries
 *     responses:
 *       200:
 *         description: querry deleted
 *         content:
 *           application/json:
 *             schema:
 */

  

