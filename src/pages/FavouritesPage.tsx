import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavouritesPage = () => {

  const { favourits } = useAppSelector(state => state.github)

  if (favourits.length === 0) return <p className="text-center">No items.</p>

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
      { favourits.map(f => (
        <li key={f}>
          <a href={f} target="_blank">{f}</a>
        </li>
        ))}
    </ul>
    </div>

  );
};

export default FavouritesPage;
