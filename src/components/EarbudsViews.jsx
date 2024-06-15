import React from 'react';
import earbudsImages from '../config/images';

const EarbudsViews = ({ selectedColor, handleViewChange }) => {
    return (
        <div className='earbudsViews'>
            {earbudsImages.map((view) => (
                <button key={view.id} onClick={() => handleViewChange(view.id)}>
                    <img src={view.views[selectedColor]} alt={view.alt} />
                </button>
            ))}
        </div>
    );
};

export default EarbudsViews;