import multer, {StorageEngine} from "multer";

const storage : StorageEngine = multer.memoryStorage()
export const imageUploader = multer({storage}).single('image')