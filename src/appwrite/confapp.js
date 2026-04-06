import config from "../config.js"
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client()
    databases
    bucket

    constructor() {
        this.client.setEndpoint(config.appwirteURL).setProject(config.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    // slug is the unique identifier for the document in appwrite
    async createPost({ title, slug, content, featuredimage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                },
            )
        } catch (error) {
            console.log("Appwrite createPost error", error)
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                },
            )
        } catch (error) {
            console.log("Appwrite updatePost error", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
            )
            return true 
        } catch (error) {
            console.log("Appwrite deletePost error", error)
            return false
        }
    }

    async getPosts() {  
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                
            )
        } catch (error) {
            console.log("Appwrite getPosts error", error)
            return false
        }
    }
}

const service = new Service()
export default service