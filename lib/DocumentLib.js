import prisma from './prismadb'

export async function getDocumentById(id) {
    const document = await prisma.document.findUnique({
        where: {
            id: id,
        },
        include: {
            owner: true,
            cards: {
                include: {
                    fields: true,
                },
            },
        },
    })

    return document;
}
export async function getDocumentFromUser (owner) {
    const document = await prisma.document.findMany({
        where: {
            ownerId: owner,
        },
    })

    return document;
}


export async function createDefaultDocument(ownerId, id, title) {
    const document = await prisma.document.create({
        data: {
            ownerId: ownerId,
            title: title,
            language: "EN",
            color: "red",
            cards: {
                create: [
                        {
                            identifier: "1",
                            fields: {
                            create: [
                                {
                                    content: `I've just made my own document... How do i change it?`,
                                    type: "question",
                                },
                                {
                                    content: `Step 1. Click on edit you moron!`,
                                    type: "response",
                                },
                            ]
                            }
                        },
                    ]
                        
                    }
                }
            }
        )
    return document;
}

export async function editField(field, type, content) {
    const document = await prisma.field.update({
        where: {
            id: field,
        },
        data: {
            content: content,
            type: type,
        },
    })

    return document;
}

