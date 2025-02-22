import { Router } from 'express';
import { Photo } from '../models/photo.model';
import multer from 'multer';
import { saveInDB } from '../models/photo.model'

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const photos = await Photo.find();
    
        /** @TODO Render Existing Photos in index.ejs */
        res.render('index', { photos });
    } catch (err) {
        console.error(err);
        next(err)
    }
})

router.post(
    '/',
    multer({
        storage: multer.diskStorage({
            destination: (req , file , cb)=>{
                cb(null , 'images')
            },
            filename: (req , file , cb)=>{
                cb(null , Date.now() + '_' + file.originalname)
            }
        })
    }).single('file')
    ,
    async (req, res, next) => {
        try {
            await saveInDB("/"+req.file?.filename , req.body.title)
            res.redirect('/');
        } catch (err) {
            console.error(err);
            next(err)
        }
    }
)

export default router;