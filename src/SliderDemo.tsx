// import { useState } from 'react';
// import { Slider } from 'primereact/slider';
// import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';  
// import { ANY_TODO } from './Types/Common/TODOTypes';

const SliderDemo = () => {
  // const [value, setValue] = useState(0);
  // const [value1, setValue1] = useState(0);
  // const onChangeHandle = (e: ANY_TODO)=> setValue(e.value);
  // const onChangeHandle1 = (e: ANY_TODO)=> setValue1(e.target.value);

  return ( 
    <>    
      <div style={{margin: '100px'}}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur delectus suscipit illum in qui soluta maiores corrupti, voluptas iure, sit amet perspiciatis dolorem deleniti, at reiciendis harum. Doloribus ipsum porro blanditiis vero consectetur quas saepe ratione quidem! Nihil architecto consectetur commodi harum eveniet, consequuntur dicta eligendi repellendus. Maiores ad iusto odio assumenda cumque velit quis tempore eum, error repellat alias dolores aliquid ratione nobis eligendi ducimus ipsam. Doloremque voluptatum ad officiis. Modi sapiente dicta ab facilis animi corporis cum magnam laudantium quod, necessitatibus sunt tempora totam! Eligendi enim dolor repudiandae animi aut neque, est autem et sequi harum saepe impedit.</p>
      </div>
      {/* <div className="slider-demo" style={{margin: '100px'}}>
          <div className="card">
              <h5>Basic: {value}</h5>
              <Slider value={value} onChange={onChangeHandle} />
          </div>
          <InputText value={value1} onChange={onChangeHandle1} className="p-inputtext-sm p-d-block p-mb-2"/>
            <div style={{color: 'black'}}>{value1}</div>
      </div> */}
    </> 
  );
};

export default SliderDemo;
