import { Request, Response } from 'express';
import catchAsync from '../../middlewares/catch-async';
import documentServices from '../../services/document.services';

class DocumentController {
  public getOne = catchAsync(async (req: Request, res: Response) => {
    if (!req.user) return res.sendStatus(401);

    const { id } = req.params;
    const document = await documentServices.findDocumentById(
      parseInt(id),
      parseInt(req.user.id)
    );
    if (document === null) return res.sendStatus(404);
    return res.status(200).json(document);
  });
}

const documentController = new DocumentController();
export { documentController };
