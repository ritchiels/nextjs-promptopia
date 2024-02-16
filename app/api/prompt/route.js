import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try {
        await connectToDB();

        const { search } = request.query;

        const query = {};

        if (search) {
            query.$or = [
                { creator: { $regex: new RegExp(search, 'i') } },
                { prompt: { $regex: new RegExp(search, 'i') } },
                { tag: { $regex: new RegExp(search, 'i') } },
            ];
        }

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

//await Prompt.find({}).populate('creator'); {} finds ALL posts, and will show creator name
//search feat done