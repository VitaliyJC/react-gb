import styles from './Message.module.css'

export function Message(props) {
    return (
        <h1 className={styles.message}>This is {props.name}'s first project on React!</h1>
    )
}