import React from 'react';
import { useSelector } from "react-redux";
import { Modal } from "..";
import styles from "./task-info.module.scss";

const TaskInfo = () => {

    const tasks = useSelector(store => store.tasks);
    return (
        <Modal isModalOpen={ tasks.isModalOpen }>
            <div className={ styles.inside }>
                <p>{ tasks.task }</p>
            </div>
        </Modal>
    );

};

export default React.memo(TaskInfo);