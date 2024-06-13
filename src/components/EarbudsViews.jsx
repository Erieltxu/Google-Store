import React from 'react';
import '../../earbudsMain.css';

const EarbudsViews = ({ selectedColor, handleImageChange }) => {
return (
        <div className='earbudsViews'>
        <button onClick={() => handleImageChange(`earbuds_01_${selectedColor}`)}>
            <img src={`src/assets/img/earbuds/caja/earbuds_01_${selectedColor}.png`} alt="Earbuds foto estuche" />
        </button>
        <button onClick={() => handleImageChange(`e_frente_01_${selectedColor}`)}>
            <img src={`src/assets/img/earbuds/vista1/e_frente_01_${selectedColor}.png`} alt="Earbuds foto" />
        </button> 
        <button onClick={() => handleImageChange(`e_lateral_01_${selectedColor}`)}>
            <img src={`src/assets/img/earbuds/vista2/e_lateral_01_${selectedColor}.png`} alt="Earbuds foto lateral" />
        </button>
        <button onClick={() => handleImageChange(`e_par_01_${selectedColor}`)}>
            <img src={`src/assets/img/earbuds/vista3/e_par_01_${selectedColor}.png`} alt="Dos earbuds foto" />
        </button>      
        </div>
    );
};

export default EarbudsViews;