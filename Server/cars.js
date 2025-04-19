import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of cars');
});

// Add other routes related to cars as needed
export default router;
