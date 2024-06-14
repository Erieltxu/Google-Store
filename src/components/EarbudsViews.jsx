import React from 'react';
import './navBar.css';


const EarbudsViews = ({ selectedColor, handleImageChange, selectedView, handleViewChange }) => {
    return (
        <div className='earbudsViews'>
            <button onClick={() => handleImageChange(`earbuds_${selectedView}_${selectedColor}`)}>
                <img src={`src/assets/img/earbuds/caja/earbuds_${selectedView}_${selectedColor}.png`} alt="Earbuds foto estuche" />
            </button>
            <button onClick={() => handleImageChange(`e_frente_${selectedView}_${selectedColor}`)}>
                <img src={`src/assets/img/earbuds/vista1/e_frente_${selectedView}_${selectedColor}.png`} alt="Earbuds foto" />
            </button>
            <button onClick={() => handleImageChange(`e_lateral_${selectedView}_${selectedColor}`)}>
                <img src={`src/assets/img/earbuds/vista2/e_lateral_${selectedView}_${selectedColor}.png`} alt="Earbuds foto lateral" />
            </button>
            <button onClick={() => handleImageChange(`e_par_${selectedView}_${selectedColor}`)}>
                <img src={`src/assets/img/earbuds/vista3/e_par_${selectedView}_${selectedColor}.png`} alt="Dos earbuds foto" />
            </button>     
        </div>
    );
};

export default EarbudsViews;