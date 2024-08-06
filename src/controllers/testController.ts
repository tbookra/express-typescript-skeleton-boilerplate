import { Request, Response, NextFunction } from 'express';

const test1 = async (req: Request, res: Response) => {
  try {
    res.json({ test: 'o.k' });
  } catch (e) {
    console.log(e);
    res.json({ error: true });
  }
};

module.exports.test1 = test1;
