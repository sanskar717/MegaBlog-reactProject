const config = {
    // appwirteURL is the endpoint for your appwrite server, you can find it in your appwrite console
    appwirteURL: String(import.meta.env.VITE_APPWRITE_URL),
    // appwriteProjectID is the unique identifier for your appwrite project, you can find it in your appwrite console
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    // appwriteDatabaseID is the unique identifier for your appwrite database, you can find it in your appwrite console
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    // appwriteCollectionID is the unique identifier for your appwrite collection, you can find it in your appwrite console
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default config
