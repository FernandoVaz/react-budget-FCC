import React from 'react';


/* What this does is, import react stuff into js file, then create a const that returns this component;
* then export default Budget as its name;
* Question: What export default does?
* How to put variables here?
* Wtf is a react hook */
const Budget = () => {
    return (
        <div className='alert alert-secondary'>
            <span>Budget: 2000R$</span>
        </div>
    );
};

export default Budget;