import React from 'react';

const Button = (props) => {
    const {children}=props;
    return (
        <div className='text-center mb-4 mt-4'>
            <button className="btn btn-active btn-accent text-white">{children}</button>
        </div>
    );
};

export default Button;