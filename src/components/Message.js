import styles from './Message.module.css'

export function Message({author, text}) {

    return (
      <div className={styles.message}>
          <hr/>
          <h1>{author}</h1>
          <>{text}</>
          <hr/>
      </div>
    )
}

export default Message