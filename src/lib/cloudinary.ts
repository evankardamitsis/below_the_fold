import { v2 as cloudinary } from 'cloudinary'

if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
    throw new Error('Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME environment variable')
}

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
})

export { cloudinary } 