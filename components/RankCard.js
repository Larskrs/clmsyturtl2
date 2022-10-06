import Image from "next/image";


export default function({style, img, name}) {

    console.log(name)

    return (
        <div className={style.card}>
            <section >
                <Image 
                    src={img}
                    layout={'fill'}
                    objectFit={'contain'}
                
                />
            </section>
            <h2>{name}</h2>
        </div>
    );
}