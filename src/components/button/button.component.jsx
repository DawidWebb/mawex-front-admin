

const Button = ({ name, type, id, onClick }) => {
    return (
        <button onClick={ onClick } type={ type } id={ id }>
            { name }
        </button>
    );
};

export default Button;