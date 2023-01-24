import multer from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';

const UploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: UploadFolder,
  storage: multer.diskStorage({
    destination: UploadFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;
      callback(null, filename);
    },
  }),
};
