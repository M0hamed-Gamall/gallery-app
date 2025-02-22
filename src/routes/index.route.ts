import { Router } from 'express';
import { Photo } from '../models/photo.model';
import { saveInDB } from '../models/photo.model'
import { upload } from '../couldinary';



const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const photos = await Photo.find();
        res.render('index', { photos });
    } catch (err) {
        console.error(err);
        next(err)
    }
})

router.post('/', upload.single('file') ,async (req, res, next) => {
    try {
        await saveInDB(req.file?.path as string, req.body.title)
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err)
    }
})

export default router;