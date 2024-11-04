import { Request, Response } from 'express';
import catchAsync from '../../middlewares/catch-async';
import { validationResult } from 'express-validator';
import { userService } from '../../services/user.services';
import { resetPassword } from '../../responses';

class UserController {
  public register = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty) {
      return res.status(400).json(err);
    }
    const { email, password1 } = req.body;
    await userService.createUser(email, password1);
    return res.sendStatus(200);
  });
  public getUser = catchAsync(async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = await userService.findUserById(userId);
    if (user === null) return res.sendStatus(400);
    return res.status(200).json(user);
  });
  public resetPassword = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user) return res.status(200).json(resetPassword);
    await userService.resetPassword(user);
    return res.status(200).json(resetPassword);
  });
}
const userController = new UserController();
export { userController };
