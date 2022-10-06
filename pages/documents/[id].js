//  Styling
import styles from '../../styles/components/page/Document.module.css'
//  Components 
import Image from 'next/image'
import Sources from '../../components/sources';
import Nav from '../../components/page/Nav'
import FieldEditButton from '../../components/FieldEditButton'
import Link from 'next/link'
// Func
import { useSession } from "next-auth/react"


let language = "EN";
let _document = undefined;

export default function({document}) {

    _document = document;   
    language = document.language;

    const { data: session } = useSession()
    const showEdit = ((session?.user.id == document.ownerId))

    return (
        <div className={styles.container}>
            <Nav/>
            <main id='natur'>
            <Link href={'/documents'}><a>🔙 Documents</a></Link>
                        <h1>{document.title + " " + countryFlag()}</h1>
                <ul>

                        {document.cards.map(function (card) {
                            return (getCard(card, session?.user.id == document.ownerId))
                        })}
                    
                </ul>
            </main> 

            

        </div>
    );
}
function getCard(card, owns) {

    return (
        <li  key={card.id}>
                        {card.identifier && <h2 style={{backgroundColor: `${_document.color}`}} >{card.identifier}</h2>}

                            {card.fields.map(function (field) {
                                return (
                                    <div>
                                        {getField(field)}
                                        
                                        {owns && <FieldEditButton field={field} />}
                                    </div>
                                    )
                            })}

                            {/* <Sources styles={styles} sources={[
                                { name: "Senit Naturfag", link: "" },
                            ]}></Sources> */}
                    </li>
    )
}

function getField(field) {
    switch (field.type) {
        case "question": return getQuestionField(field); 
        case "reference": return getReferenceField(field);
        default : return getResponseField(field);
    }
}
function getQuestionField (field) {
    return (
            <p className={styles.question}> <span>{questionPrefix()}: </span> 
                {field.content}
            </p>
        )
}
function getResponseField (field) {
    return (
        <p>
            {field.content}
        </p>
    )
}
function getReferenceField (field) {
    return (
        <p className={styles.reference}> <span>{referencePrefix()}: </span> 
                {field.content}
            </p>
    )
}

function questionPrefix() {
    switch (language) {
        default: return "Question"
        case "DE": return "Frage"
        case "NO": return "Spørsmål"
    }
}
function referencePrefix() {
    switch (language) {
        default: return "Reference"
        case "DE": return "Hinweis"
        case "NO": return "Referanse"
    }
}
function countryFlag() {
    switch (language) {
        default: return "🇬🇧"
        case "DE": return "🇩🇪"
        case "NO": return "🇳🇴"
    }
}


export async function getServerSideProps(ctx) {

    const id = ctx.params.id;

    const docu_data = await (await fetch(process.env.API_PREFIX + "api/documents/read?id=" + id)).json()

    console.log(docu_data)

    return {
        props:{
            document: docu_data
        }
    }
}
