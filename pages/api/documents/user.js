import { getDocumentFromUser } from "../../../lib/DocumentLib";


export default async function handler(req, res) {
    res.status(200).json(await getDocumentFromUser(req.query.id))
  }
  