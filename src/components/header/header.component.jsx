import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../index";
import { addLogout } from "../../data/user";
import { sessionItemCheck } from "../../data/session-storage";
import styles from "./header.module.scss";



const Header = () => {
	const session = useSelector((store) => store.session);
	const user = useSelector((store) => store.user);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(sessionItemCheck());
	}, [dispatch]);

	const handleLogoutUser = () => {
		dispatch(addLogout());
	};

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.inside }>
				<h3>Administracja strony Mawex</h3>
				{ session || user.length ? <Button name="wyloguj" type="button" onClick={ handleLogoutUser } /> : "" }
			</div>
		</div>
	);
};

export default React.memo(Header);
