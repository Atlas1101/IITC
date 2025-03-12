import { Request, Response, RequestHandler } from "express";
import Post from "../models/Post";

// @desc    Get all posts
// @route   GET /api/posts
export const getAllPosts: RequestHandler = async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "username"); // Fetch posts with author usernames
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Get a single post by ID
// @route   GET /api/posts/:id
export const getPostById: RequestHandler = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate(
            "author",
            "username"
        );

        if (!post) {
            res.status(404).json({ message: "Post not found" });
            return;
        }

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
