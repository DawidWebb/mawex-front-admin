import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogItems } from "../../data/blog-items";
import { BlogItem } from "../../components";
import styles from "./start-page.module.scss";

const StartPage = () => {

    const blogItems = useSelector(store => store.blogItems);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!blogItems.length) {
            dispatch(getAllBlogItems());
        } else {
            return;
        }
    }, [blogItems, dispatch]);

    const blogItemsViev = !blogItems.length ? (
        <p>Brak elementów do wyświetlenia</p>
    ) : (
        blogItems.map((item) => <BlogItem key={ item._id } itemData={ item } />).reverse()
    );

    return (

        <div className={ styles.wrapper }>
            { blogItemsViev }
        </div>
    );
};

export default StartPage;