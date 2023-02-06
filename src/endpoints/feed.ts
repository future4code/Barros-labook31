import express, { Express, Request, Response } from "express";
import connection from "../database/connection";
import app from "../database/app";

app.get('/feed/:userId', async (req, res) => {
    try {
    const { userId } = req.params;
    const friends = await connection('labook_makefriendship')
    .where({ user1_id: userId })
    .orWhere({ user2_id: userId });
} catch (error:any) {
    res.status(400).send({
    message: error.message
    });
    }
    });

    export default app