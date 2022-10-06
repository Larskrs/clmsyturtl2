//  Styling
import styles from '../../styles/components/page/Document.module.css'
//  Components 
import Image from 'next/image'
import Sources from '../../components/sources';
import Nav from '../../components/page/Nav'

export default function() {
    return (
        <div className={styles.container}>
            <Nav/>
            <main id='natur'>

                        <h1> Naturfag - Fordøyelse</h1>
                <ul>
                <li  key={11}>
                        <h2>1</h2>
                        <p className={styles.question}> <span>Spørmsål: </span> 
                            Hva er næringstoffer bygget opp av?
                        </p>
                        <p>

                                Proteiner er oppbygget av aminosyrer <br/>
                                Karbohydrater er oppbygget av sukkerenheter <br/>
                                Fett er oppbygget av fettsyrer og glycerol <br/>
                        
                        </p>
                            <Sources styles={styles} sources={[
                                { name: "Senit Naturfag", link: "" },
                            ]}></Sources>
                    </li>
                    <li key={12}>
                        <h2>2</h2>
                        <p className={styles.question}> <span>Spørsmål: </span> 
                            Hvordan blir næringstoffer brytet ned i kroppen?
                        </p>
                        <p>

                            Først blir karbohydrater brytet ned av amylase i spyttet som dannes i munnen før kroppen begynner å spise. <br/> 
                        </p>
                        <p>
                            Når maten har kommet til magesekken blir saltsyre og pepsin
                            skillt ut av kjertler på veggene til magesekken. <br/>
                            Pepsin bryter ned proteiner til korte aminosyrer, og saltsyren dreper mikroorganismer som følger med maten. <br/>
                        </p>
                        <p>
                            Til slutt blir fett brytet ned av Lipase, gallesyre og maltose i tynntarmen 
                        </p>
                            <Sources styles={styles} sources={[
                                { name: "Senit Naturfag", link: "https://www.gyldendal.no/vgs/senit/c-183517/" },
                            ]}></Sources>
                    </li>

                    <li key={13}>
                        <h2>3</h2>
                        <p className={styles.question}> <span>Spørsmål: </span> 
                            Hva gjør leveren med glyserol?
                        </p>
                        <p>
                                Leveren omdanner glukose til glykoken for å begeistre 
                        </p>
                        <div className={styles.incImg}>
                            <Image objectFit='contain' src={'https://media.discordapp.net/attachments/992455884166922301/1027114270024024074/QuestionCard.png?width=1125&height=671'} layout='fill'></Image>
                        </div>
                            <Sources styles={styles} sources={[
                                { name: "Senit Naturfag", link: "https://www.gyldendal.no/vgs/senit/c-183517/" },
                            ]}></Sources>
                    </li>
                    
                </ul>
            </main> 

            

        </div>
    );
}