import styles from './card.module.css'

type CardProps = {
    name:string,
    img:string
}

export default function Card ({name, img}:CardProps){

    const backgroundURL = `url(${img})`

    return (
        <div className={styles.card} style={{backgroundImage:backgroundURL, backgroundPosition:'center', backgroundSize:'cover'}}>
            <div className={styles.caption}>
                <p className={styles.titulo}>{name}</p>
            </div>
        </div>
    )
}