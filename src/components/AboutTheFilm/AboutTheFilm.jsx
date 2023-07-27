import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

const AboutTheFilm = () => {
  return (
    <>
      <Section>
        <p>About the film</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AboutTheFilm;