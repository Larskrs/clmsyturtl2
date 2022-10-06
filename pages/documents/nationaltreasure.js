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
            <main>
                <h1>English - National Treasure </h1>
                
                <ul>
                    <li key={0}>
                        <h2>1</h2>
                        <p className={styles.question}> <span>Question: </span> "The secret lies with Carlotte"... Was there really a ship called Charlotte? If so, what happened to her?</p>
                        <p>

                        There was a ship called Charlotte from 1784 - 1818. 
                        Charlotte was originally used for convict transport and ended her career with the east-india company, traversing the waters from London to Jamaica.
                        The ship was lost in 1818 near the coast of Newfoundland.
                        
                        </p>
                        <Sources styles={styles} sources={[
                                { name: "Discovery", link: "https://discovery.nationalarchives.gov.uk/details/a/A13530841" },
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Charlotte_(1784_ship)" }
                        ]}/>
                    </li>
                    <li  key={1}>
                        <h2>2</h2>
                        <p className={styles.question}> <span>Question: </span> What was a "founding father"?</p>
                        <p>

                        A founding father was someone who helped sign the constitution of the United States of America.
                        
                        </p>
                        <Sources styles={styles} sources={[
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Founding_Fathers_of_the_United_States" },
                                { name: "Britannica", link: "https://www.britannica.com/topic/Founding-Fathers"}
                            ]}></Sources>
                    </li>
                    <li  key={2}>
                        <h2>3</h2>
                        <p className={styles.question}> <span>Question: </span> The movie says there were 55. Is that right?</p>
                        <p>

                        In the movie they say that the constitution was signed by 55 men, but there were really 56 men who signed. 
                        
                        </p>
                        <Sources styles={styles} sources={[
                                { name: "United States Senate", link: "https://www.senate.gov/civics/constitution_item/constitution.htm" },
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Signing_of_the_United_States_Constitution" },
                            ]}></Sources>
                        
                    </li>
                    <li key={3}>
                        <h2>4</h2>
                        <p className={styles.question}> <span>Question: </span> In the movie, the first clue is handed over by Charles Carrol, who is calimed to be the last
                        founding father, and also a freemason. But was he really? </p>
                        <p>

                        According to the National Herritage Museum, Gunning Bedford Jr.; John Blair; David Brearly; Jacob Broom; Daniel Carrol; John Dickinson; 
                        Benjamin Franklin; Rufus King; and George Washington were the only singees of the constitution that were members of the freemasons. Although a few selective sources say he did.  
                        
                        </p>
                        <Sources styles={styles} sources={[
                            { name: "National Herritage Museum", link: "https://nationalheritagemuseum.typepad.com/library_and_archives/declaration-of-independence/" },
                                { name: "Britannica", link: "https://en.wikipedia.org/https://www.britannica.com/biography/Charles-Carroll/1832_United_States_presidential_election" },
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Charles_Carroll_of_Carrollton" },
                            ]}></Sources>
                    </li>
                    <li key={4}>
                        <h2>5</h2>
                        <p className={styles.question}> <span>Question: </span> 
                            In the movie, Carrol tries to meet the president. The year was 1832. Who was president at the time?
                        </p>
                        <p>

                        On December 5th, 1832 the election of 1829 ended with a win for the Democratic Party with their candidate Andrew Jackson to serve another term till 1837.
                        
                        </p>
                        <Sources styles={styles} sources={[
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/1832_United_States_presidential_election" },
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States" }
                            ]}></Sources>
                    </li>
                    <li key={5}>
                        <h2>6</h2>
                        <p className={styles.question}> <span>Question: </span> 
                            The treasure was found behind the grave of a person called Parkington Lane. Was he a real person?
                        </p>
                        <p>

                            From what sources I could find, there is no person called Parkington Lane.
                        
                        </p>
                            <Sources styles={styles} sources={[
                                { name: "Wikipedia", link: "" },
                            ]}></Sources>
                    </li>
                    <li key={6}>
                        <h2>7</h2>
                        <p className={styles.question}> <span>Question: </span> 
                            This grave was in a church on Wall Street. Why is the street called Wall Street?
                        </p>
                        <p>

                        Wall street gets it's name from the long-gone wall that erected by Dutch settlers in the 17th century to keep the British and pirates out.
                        
                        </p>
                            <Sources styles={styles} sources={[
                                { name: "Investopedia", link: "https://www.investopedia.com/ask/answers/where-does-the-name-wall-street-come-from/" },
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Wall_Street"}
                            ]}></Sources>
                    </li>
                    <li key={7}>
                        <h2>8</h2>
                        <p className={styles.question}> <span>Question: </span> 
                            Who was Silence Dogood?
                        </p>
                        <p>

                        The name Silence Dogood refers to the pen name used by Benjamin Franklin for his letters sent to the New-England Courant.
                        
                        </p>
                            <Sources styles={styles} sources={[
                                { name: "Investopedia", link: "https://www.investopedia.com/ask/answers/where-does-the-name-wall-street-come-from/" },
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Wall_Street"}
                            ]}></Sources>
                    </li>
                    <li key={8}>
                        <h2>9</h2>
                        <p className={styles.question}> <span>Bonus Question: </span> 
                           "One if by land, two if by sea". In the end Ben's father fools Ian with this phrase. Where does this phrase come from?
                        </p>
                        <p>

                        The phrase "One if by land, two if by sea", refers to the procedure once used to inform the colonial malitia of British attacks. 
                        The number of lamps lit would indicate if they were coming by sea or by land. Information like this would be passed down from lookout towers to informers on horseback alerting the colonial malitia before the <a href='https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord'>Battles of Lexington and Concord</a>
                        
                        </p>
                            <Sources styles={styles} sources={[
                                { name: "Paul Revere's Midnight Ride", link: "https://en.wikipedia.org/wiki/Paul_Revere%27s_Midnight_Ride" },
                                { name: "Battles of Lexington & Concord", link: "https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord"},
                                { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Paul_Revere"}
                            ]}></Sources>
                    </li>
                </ul>
            </main>




            

            

        </div>
    );
}