"use strict";
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
/**
* @swagger
* /api/v1/blogs/{id}:
*   get:
*     summary: Get single blog
*     description: Retrieve details of a single blog.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to retrieve.
*     responses:
*       200:
*         description: Details of the blog
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Blog'
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
/**
* @swagger
* /api/v1/blogs/{id}:
*   put:
*     security:
*       - Authorization: []
*     summary: Update a blog
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to update.
*     requestBody:
*       required: false
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             required:
*               - title
*               - image
*               - content
*             properties:
*               title:
*                 type: string
*               image:
*                 type: string
*                 format: binary
*               content:
*                 type: string
*     responses:
*       201:
*         description: Blog Updated
*       500:
*         description: Server Error
*/
/**
/**
* @swagger
* /api/v1/blogs/{id}:
*   delete:
*     security:
*       - Authorization: []
*     summary: Delete single blog
*     description: Delete a blog
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to delete.
*     responses:
*       200:
*         description: Blog deleted
*         content:
*           application/json:
*             schema:
*               type: object
*/
/**
/**
* @swagger
* /api/v1/blogs/{id}/comments:
*   post:
*     summary: Create a comment
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to which the comment belongs.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - Email
*               - Comment
*             properties:
*               Email:
*                 type: string
*               Comment:
*                 type: string
*     responses:
*       201:
*         description: Created
*       500:
*         description: Server Error
*/
/**
/**
* @swagger
* /api/v1/blogs/{id}/comments:
*   get:
*     summary: Get all comments for a blog
*     description: Retrieve all comments for a specific blog.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to retrieve comments for.
*     responses:
*       200:
*         description: List of comments
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Comment'
*/
/**
/**
* @swagger
* /api/v1/blogs/{id}/likes:
*   post:
*     summary: Create a like
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to which the like belongs.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - like
*             properties:
*               like:
*                 type: boolean
*     responses:
*       201:
*         description: Like Created
*       500:
*         description: Server Error
*/
/**
* @swagger
* /api/v1/blogs/{id}/likes:
*   get:
*     summary: Get all likes
*     description: Retrieve all likes for a specific blog.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the blog to retrieve likes for.
*     responses:
*       200:
*         description: List of likes
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Like'
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
 *              - Name
 *              - Email
 *              - Message
 *            properties:
 *              Name:
 *                type: string
 *              Email:
 *                type: string
 *              Message:
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
/**
* @swagger
* /api/v1/brand/querries/{queryId}:
*   delete:
*     security:
*       - Authorization: []
*     summary: Delete query
*     description: Delete a query
*     parameters:
*       - in: path
*         name: queryId
*         required: true
*         schema:
*           type: string
*         description: The ID of the query to delete.
*     responses:
*       200:
*         description: Query deleted
*         content:
*           application/json:
*             schema:
*               type: object
*/
