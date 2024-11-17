import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const client = new PrismaClient();

export class UserController {
    static async createUser(req: Request, res: Response) {

        try {
            const newuser = await client.user.create({
                data: req.body
            });

            res.status(200).json({ success: true, message: "user created successfully", user: newuser });
        }
        catch (err: any) {
            if (err.code === 'P2002') {
                // Unique constraint violation
                const target = err.meta?.target; // The field(s) that caused the conflict
                console.error(`Unique constraint failed on: ${target}`);
                res.status(500).json({ message: `The ${target} is already in use. Please choose another.` });
            } else {
                // Other errors
                console.error('Error creating user:', err);
                res.status(500).json({ message: "Internal server error" });
            }

        }
    }
    static async getUsers(req: Request, res: Response) {
        try {
            const users = await client.user.findMany({
                skip: Number(req.query.skip) || 0,
                take: Number(req.query.take) || 10,
            });
            const count = await client.user.count();
            res.status(200).json({ success: true, users, count });
        } catch (error: any) {
            return res.status(500).json({ error: "Unable to get users due to internal server error" })
        }
    }

    static async editUser(req: Request, res: Response) {
        try {
            console.log(req.body);
            const editedUser = await client.user.update({
                where: {
                    id: Number(req.query.id)
                },
                data: req.body
            })
            res.status(200).json({
                editedUser, success: true
            })
        } catch (error: any) {
            return res.status(500).json({ error: "Unable to edit user due to internal server error" })
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            const user = await client.user.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            })
            res.status(200).json({ success: true, user: user });
        } catch (error: any) {
            return res.status(500).json({ error: "Unable to get specific user due to internal server error" });
        }
    }

    static async deleteUserById(req: Request, res: Response) {
        try {
            const user = await client.user.delete({
                where: {
                    id: req.body.id
                }
            })
            res.status(200).json({ success: true, deleted: user });
        } catch (error: any) {
            return res.status(500).json({ error: "Unable to delete user due to internal server error" })
        }
    }
}