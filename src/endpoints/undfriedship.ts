import express, { Express, Request, Response } from "express";
import connection from "../database/connection";
import app from "../database/app";

app.delete('/friendship/:user1Id/:user2Id', async (req, res) => {
    try {
    const { user1Id, user2Id } = req.params;
    const friendship = await connection('labook_makefriendship')
    .where({ user1_id: user1Id, user2_id: user2Id })
    .orWhere({ user1_id: user2Id, user2_id: user1Id })

} catch (error:any) {
    res.status(400).send({
    message: error.message
    });
    }
    });

    export default app