import { Request, Response } from 'express';
import catchAsync from '../../middlewares/catch-async';
import documentServices from '../../services/document.services';
import { DocumentUser } from '../../db/models/document-user.model';
import { Document } from '../../db/models/document.model';

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
  public getAll = catchAsync(async (req: Request, res: Response) => {
    const documents = await Document.findAll({
      where: { userId: req.user?.id },
    });
    const documentUsers = await DocumentUser.findAll({
      where: { userId: req.user?.id },
      include: { model: Document },
    });
    const sharedDocuments = documentUsers.map(
      (documentUser) => documentUser.document
    );
    documents.push(...sharedDocuments);
    return res.status(200).json(documents);
  });
}

const documentController = new DocumentController();
export { documentController };
