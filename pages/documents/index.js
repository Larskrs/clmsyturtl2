//  Styling
import styles from '../../styles/components/page/DocumentList.module.css'
//  Components 
import Image from 'next/image'
import Sources from '../../components/sources';
import Nav from '../../components/page/Nav'
import FieldEditButton from '../../components/FieldEditButton'
import Link from 'next/link';
// Func
import { useSession, getSession } from "next-auth/react"


export default function({documents}) {
    
    const { data: session } = useSession()
    
    return (
        <div className={styles.container}>
            <Nav/>
            <main>
                        {documents.map(function (document) {
                            return (<Link href={'/documents/' + document.id}><a>{document.title + " " + countryFlag(document.language)}</a></Link>)
                        })}
            </main> 

            

        </div>
    );
}

export async function getServerSideProps({req}) {
    const session = await getSession({ req });
    console.log(session)

    const id = session.user.id

    const documents = await (await fetch(process.env.API_PREFIX + "api/documents/user?id=" + id)).json()
    console.log(documents)
    
    // Use this session information where you want.
    return {
        props:{
            documents: documents
        }
    }
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
function countryFlag(language) {
    switch (language) {
        default: return "🇬🇧"
        case "DE": return "🇩🇪"
        case "NO": return "🇳🇴"
    }
}