import express, { Express, Request, Response } from "express";
import connection from "../database/connection";
import app from "../database/app";

app.post('/friendship', async (req, res) => {


    try {

        let message = "Success"

    const { user1Id, user2Id } = req.body;

    await connection('labook_makefriendship').insert({
    user1_id: user1Id,
    user2_id: user2Id
    });
    res.status(201).send({
    message: `A amizade entre o usuário ${user1Id} e o usuário ${user2Id} foi criada com sucesso`
    });

    }catch (error:any) {
    res.status(400).send({
    message: error.message
    });
    }
    });

    export default app