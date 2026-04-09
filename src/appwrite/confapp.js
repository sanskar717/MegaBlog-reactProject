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

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log("Appwrite getPosts error", error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite getPosts error", error)
            return false
        }
    }

    // upload file
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite uploadFile error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )       
            return true
        } catch (error) {
            console.log("Appwrite deleteFile error", error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service()
export default service
