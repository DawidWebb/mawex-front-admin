import { useState } from "react";
import { AddItemForm, Button } from "..";
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

    const [isAddNewsModalOpen, setIsAddNewsModalOpen] = useState(false);

    const handleDeleteItem = () => { };
    const handleEditItem = () => {
        setIsAddNewsModalOpen({
            id: _id,
            title,
            content1,
            content2,
            imgPath,
            date,
            link,
            userName,
        });
    };

    const sortedContent1 = content1.split(/\n/);
    const vievContent1 = sortedContent1.map((item, index) => <p key={ index }>{ item }</p>);

    const sortedContent2 = !content2 ? null : content2.split(/\n/);
    const vievContent2 = !sortedContent2 ? "" : sortedContent2.map((item, index) => <p key={ index }>{ item }</p>);

    return (
        <div className={ styles.itemWrapper }>
            <div className={ styles.image }>
                <img src={ `${ imgPath }` } alt={ `${ imgPath.slice(12, 40) }` } />
            </div>
            <div className={ styles.content }>
                <p>tytuł: { title }</p>
                <div className={ styles.content1 }>
                    { vievContent1 }
                </div>
                <div className={ styles.content2 }>
                    { vievContent2 }
                </div>
                <p>{ content2 }</p>
                { linkViev }
                <div className={ styles.signature }>
                    <p>{ date }</p>
                    <p>{ userName }</p>
                </div>
            </div>
            <div className={ styles.buttons }>
                <Button type="button" name="usuń" onClick={ handleDeleteItem } />
                <Button type="button" name="edytuj" onClick={ handleEditItem } />
            </div>
            <AddItemForm
                isAddNewsModalOpen={ isAddNewsModalOpen }
                setIsAddNewsModalOpen={ setIsAddNewsModalOpen }
                isEdited={ isAddNewsModalOpen }
                setIsEdited={ setIsAddNewsModalOpen }
            />
        </div>
    );

};
export default BlogItem;