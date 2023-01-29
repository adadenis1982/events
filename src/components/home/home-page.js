import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 601) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    };
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="home_body">
      {data?.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <div
            style={{
              width: '40%',
              height: fullscreen ? '100px' : '300px',
              position: 'relative',
            }}
          >
            <Image fill alt={ev.title} src={ev.image} />
          </div>
          <div className="content">
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
