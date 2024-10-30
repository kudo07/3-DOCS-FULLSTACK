import { validationResult } from 'express-validator';
import catchAsync from '../../middlewares/catch-async';
import { userService } from '../../services/user.services';
import { emailNotVerified, userNotFounnd } from '../../responses';
import { Request, Response } from 'express';

class AuthController {
  public login = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty) {
      return res.status(400).json(err);
    }
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ errors: userNotFounnd });
    }
    const validPassword = await userService.checkPassword(user, password);
    console.log(validPassword);

    if (!validPassword) {
      return res.status(401).json({ erorrs: userNotFounnd });
    }
    // if (!user.isVerified) {
    //   return res.status(403).json({ errors: emailNotVerified });
    // }
    const authResponse = await userService.generateAuthResponse(user);
    return res.status(200).json(authResponse);
  });
}
const authController = new AuthController();
export { authController };
