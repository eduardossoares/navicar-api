import multer from "multer";

export default {
  upload() {
    return {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "./uploads");
        },
        filename: (req, file, cb) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          return cb(null, fileName);
        },
      }),
    };
  },
};
