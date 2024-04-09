import Button from "./Button";
import styles from "./Article.module.css";
function Article(props) {
  return (
    <article>
      <h3 className={styles.h3}>{props.header}</h3>
      <p>{props.content}</p>
      <Button>Read More</Button>
    </article>
  );
}

export default Article;
