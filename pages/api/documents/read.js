import { createTestDocument, getDocumentById } from "../../../lib/DocumentLib";

export default async function handler(req, res) {
    res.status(200).json(await getDocumentById(req.query.id))
  }
  