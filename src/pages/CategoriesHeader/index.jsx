import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updateSelectedItem, updateselecteQueue } from '../../components/swager/musicSlice';

function CategoriesHeader() {
  const [CateHeader, setCateHeader] = useState([]);
  const { linkheader } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSwaggerSpec = async () => {
      try {
        const swaggerUrl = `https://mp4.freemyip.com/api/category/category/jazz/`;
        const response = await fetch(swaggerUrl);
        const swaggerJson = await response.json();
        
        setCateHeader(swaggerJson);
      } catch (error) { 
        console.error('Ошибка при получении Swagger Specification:', error);
      }
    };

    fetchSwaggerSpec();
  }, [linkheader]);

  const handleClick = (item) => {
    dispatch(updateSelectedItem(item));  
  }

  const handleClickQueue = (item) => {
    dispatch(updateselecteQueue(item));
  }
  console.log(CateHeader);

  return (
    <div>
        <h4>{linkheader}</h4>
        {/* {CateHeader.map((item) => (
        <div onClick={() => handleClick(item)} key={item.id}>
          <p>{item.name}</p>
          <img src={`https://mp4.freemyip.com${item.image_music}`} alt="kk" />
          <p>{item.category}</p>
          <p>{item.audio_file}</p>
          <button onClick={() => handleClickQueue(item)}>добавить в очередь</button>
        </div>
      ))} */}
    </div>
  )
}

export default CategoriesHeader;