import { createDefaultDocument, getDocumentById } from "../../../lib/DocumentLib";

export default async function handler(req, res) {
    res.status(200).json(await createDefaultDocument("cl8x6630t0000tyr8hw0mmeod", "", "Document 1"))
  }
  