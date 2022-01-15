import { Request, Response } from "express";
import { Types } from "mongoose";
import IUser from "../database/interfaces/IUser";
import Post from "../database/models/Post";
import Thread from "../database/models/Thread";

// get all threads details
export const getAllThreads = async (req: Request, res: Response) => {
    await Thread
        .find()
        .then(threads => res.status(200).json(threads))
        .catch(err => {
            console.log(err);
            res.status(404).json({ message: "There was an error while fetching threads." })
        });
}

// get thread details
export const getThread = async (req: Request, res: Response) => {
    const title = req.params.title.toLocaleLowerCase();

    await Thread
        .findOne({ title })
        .then(thread => res.status(200).json(thread))
        .catch(err => {
            console.log(err);
            res.status(404).json({ message: "There was an error." })
        });
}

// create new thread
export const createThread = async (req: Request, res: Response) => {
    const thread = req.body;
    if ((req.user as IUser)?.permissionLevel < 3)
        return res.status(401).json({ message: "You do not have the permission to create a thread." });

    await new Thread({ ...thread, title: thread.title.toLocaleLowerCase().replace(/\s/g, '-') , user: (req.user as IUser)?._id })
        .save()
        .then(thread => res.status(200).json({ message: "Thread created successfully" }))
        .catch(err => {
            console.log(err);
            res.status(404).json({ message: "There was an error while creating the thread." })
        });
}

// update thread all posts that are in that thread
export const updateThread = async (req: Request, res: Response) => {
    const { title, threadData } = req.body;
    if ((req.user as IUser)?.permissionLevel < 3)
        return res.status(401).json({ message: "You do not have the permission to create a thread." });

    await Thread
        .findOne({ title })
        .then(async currThread => {
            if (title.toLowerCase() !== threadData.title.toLowerCase())
                currThread?.posts.forEach(async postId => {
                    await Post.findOneAndUpdate({ _id: postId }, { $pull:{ tags: title } });
                    await Post.findOneAndUpdate({ _id: postId }, { $push:{ tags: threadData.title.toLowerCase() } });
                });
            await Thread
                .findOneAndUpdate({ title }, { $set: {
                    ...threadData,
                    title: threadData.title.toLocaleLowerCase(),
                    updatedAt: Date.now()
                }}, { new: true })
                .then(async newThread => res.status(200).json(newThread))
        })
        .catch(err => {
            console.log(err);
            res.status(409).json({ message: "There was an error while updating the post." })
        });
}