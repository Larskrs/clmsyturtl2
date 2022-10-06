import { editField } from "../../../../lib/DocumentLib"


export default async function handler(req, res) {

    console.log("field edit request received, attempting to handle now!")
    const body = req.body

    const fieldId = body.field
    const content = body.content
    const type = body.type

    console.log(body)
    const result = await editField(fieldId, type, content)
    res.status(200).json(result)
  }
  