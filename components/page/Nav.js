import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/page/nav.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';

// Components

import UserTab from './UserTab'

// States


export default function Home() {

    const [userTab, setUserTab] = useState(false);

    function toggleUserTab (event) {
        console.log("Setting user tab")
        setUserTab(!userTab);
      }
      
      function userImg (img) {
        return (
          <div className={styles.avatar}>
                <Image 
                    src={img}
                    layout={'fill'}
                    objectFit={'contain'}
                 onClick={toggleUserTab}/>
            </div>
        )
      }
      
      function usercorner() {
        const { data: session } = useSession()
        if (session) {
          return (
            <>
              {userTab && <UserTab user={session.user}/>}
              {userImg(session.user.image)}
            </>
          )
        }
        return (
          <>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )
      }
      
      return (
        <div className={styles.container}>
            <section className={styles.logo}>
                <Link href={'/'}>
                <div>
                    <Image 
                        src={'/clumsyturtle.png'}
                        layout={'fill'}
                        objectFit={'contain'}
                        
                        
                        />
                    
                </div>
                </Link>
            </section>
            
            <section>
                {usercorner()}
            </section>

        </div>
    );
}

