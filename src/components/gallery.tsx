import { sculptureList } from "@/data/article";
import { useState } from 'react';

export default function Gallery() {
  let [index, setIndex] = useState(0);

  function handleClick(direction) {
    if (direction === 'next') {
      setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
    } else if (direction === 'prev') {
      setIndex((prevIndex) => (prevIndex - 1 + sculptureList.length) % sculptureList.length);
    }
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={() => handleClick('prev')} className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
        Artikel Sebelumnya
      </button>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
        Artikel Selanjutnya
      </button>

      {sculpture ? (
        <>
          <h2>
            <i>{sculpture.name}</i> oleh {sculpture.artist}
          </h2>
          <h3>({index + 1}) dari {sculptureList.length}</h3>
          <img src={sculpture.url} alt={sculpture.alt} />
          <p>{sculpture.description}</p>
        </>
      ) : (
        <p>No sculptures available.</p>
      )}
    </>
  );
}