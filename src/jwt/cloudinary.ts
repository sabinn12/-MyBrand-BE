import cloudinary from 'cloudinary';
import cloud from '../configuration/cloudinary.config';
cloud
export const uploadToCloud = async (file: Express.Multer.File) => {
  try {
    const uploadedImage = await cloudinary.v2.uploader.upload(file.path, {
      folder: 'blogsImage',
      use_filename: true,
    });
    return uploadedImage.secure_url;
  } catch (e:any) {
    throw new Error(e.message);
  }
};