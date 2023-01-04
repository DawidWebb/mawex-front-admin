import styles from "./blog-item.module.scss";

const BlogItem = ({ itemData }) => {

    const { _id, title,
        content1,
        content2,
        link,
        userName,
        date,
        imgPath } = itemData;

    const linkViev = link === "" ? null : <a href={ `${ link }` }>link do źródła</a>;


    return (
        <div className={ styles.itemWrapper }>
            <div className={ styles.image }>
                <img src={ `${ imgPath }` } alt={ `${ imgPath.slice(12, 40) }` } />
            </div>
            <div className={ styles.content }>
                <p>tytuł: { title }</p>
                <p>{ content1 }</p>
                <p>{ content2 }</p>
                { linkViev }
                <div className={ styles.signature }>
                    <p>{ date }</p>
                    <p>{ userName }</p>
                </div>
            </div>
        </div>
    );

};
export default BlogItem;