import { error } from 'console';
import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    'access_token',
    (err: VerifyErrors | null, decoded: unknown) => {
      if (err) return res.sendStatus(403);
      try {
        const { id, email, roles } = decoded as RequestUser;
        req.user = { id, email, roles };
        next();
      } catch (error) {}
      console.log(error);
      return res.sendStatus(403);
    }
  );
};

export { authenticate };
