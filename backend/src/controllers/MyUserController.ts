import { Request, Response, RequestHandler } from "express";
import User from "../models/user.model";

// Fixing the handler type to match RequestHandler expectations
const createCurrentUser: RequestHandler = async (req: Request, res: Response): Promise<any> => {
    try {
        const { auth0Id } = req.body;

        // Check if the user exists
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).json(existingUser.toObject());

        }

        // Create new user if not found
        const newUser = new User(req.body);
        await newUser.save();

        // Return new user object
        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating new user" });
    }
};

export default {
    createCurrentUser,
};
