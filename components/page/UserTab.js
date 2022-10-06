import styles from '../../styles/components/page/userTab.module.css'

import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import Link from 'next/link';

export default function({user}) {

    console.log(user.image)

    return (
        <div className={styles.container}>
            <ul>
                    <div className={styles.avatar}>
                        <Image 
                            src={user.image}
                            layout={'fill'}
                            objectFit={'contain'}
                            />
                    </div>
                    <h2>{user.name}</h2>
                    <Link href={"/settings"}><a>Settings</a></Link>
            </ul>
            <ul>
                <Link href={'/documents'}><li>Documents</li></Link>
                <Link href={'/profile/' + user.id}><li>Profile</li></Link>
                <Link href={'/profile/' + user.id + "/groups"}><li>Groups</li></Link>
            </ul>
            <ul className={styles.quick}>
                <button onClick={() => signOut()}>Sign out</button>
                <button onClick={() => signOut()}>Switch Account</button>
            </ul>
            
        </div>
    );
}
