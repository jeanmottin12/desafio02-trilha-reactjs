import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

// interface SidebarProps {
//   handleChildButton: (id: number) => {},
//   selectedGenreId: number;
// }

export function SideBar({handleChildButton, selectedGenreId}: any) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleChildButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}