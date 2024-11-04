import { body } from 'express-validator';
import { userService } from '../services/user.services';

class UserValidator {
  public register = [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Must Provide a valid email address'),
    body('email').custom(async (value) => {
      const user = await userService.findUserByEmail(value);
      if (user) {
        return Promise.reject('User with this mail already exists');
      }
      return true;
    }),
    body('passowrd1')
      .isLength({ min: 8, max: 25 })
      .withMessage('Password must be 8 to 25'),
    body('password1')
      .matches(/\d/)
      .withMessage('Password must contain atleast 1 number'),
    body('password2').custom((value, { req }) => {
      if (value !== req.body.password1) {
        throw new Error('Password must matches');
      }
      return true;
    }),
  ];
  public resetPassword = [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Must provide a valid email address'),
  ];
}
const userValidator = new UserValidator();
export { userValidator };
