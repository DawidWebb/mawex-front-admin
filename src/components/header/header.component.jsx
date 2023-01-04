import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemForm, Button } from "../index";
import { addLogout } from "../../data/user";
import { sessionItemCheck } from "../../data/session-storage";
import styles from "./header.module.scss";



const Header = () => {
	const session = useSelector((store) => store.session);
	const user = useSelector((store) => store.user);

	const dispatch = useDispatch();

	const [isAddNewsModalOpen, setIsAddNewsModalOpen] = useState(false);

	useEffect(() => {
		dispatch(sessionItemCheck());
	}, [dispatch]);

	const handleLogoutUser = () => {
		dispatch(addLogout());
	};

	const handleAddPostItem = () => {
		setIsAddNewsModalOpen(true);
	};

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.inside }>
				<h3>Administracja strony Mawex</h3>
				<div className={ styles.buttons }>
					{ session || user.length ? <Button name="wyloguj" type="button" onClick={ handleLogoutUser } /> : "" }
					{ session || user.length ? <Button name="dodaj post" type="button" onClick={ handleAddPostItem } /> : "" }
				</div>
			</div>
			<AddItemForm
				isAddNewsModalOpen={ isAddNewsModalOpen }
				setIsAddNewsModalOpen={ setIsAddNewsModalOpen }
			/>
		</div>
	);
};

export default React.memo(Header);
