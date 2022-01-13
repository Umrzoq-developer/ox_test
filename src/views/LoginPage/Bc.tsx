import React from 'react';

interface IProps {
    handleClick: () => void;
}

const Bc = ({handleClick}: IProps) => {
    return (
        <div>
            Bc
            <button onClick={handleClick}>Clickme</button>
        </div>
    );
};

export default Bc;
