import { Document, Types } from "mongoose";

export default interface IPost extends Document {
    title: string;
    body: string;
    user: Types.ObjectId;
    votes: [ Types.ObjectId ];
    downVotes: [ Types.ObjectId ],
    tags: [ string ];
    edited: boolean,
    comments: [ Types.ObjectId ];
    createdAt: Date;
    updatedAt: Date;
}