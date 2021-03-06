import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title='현재 상영작'>
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              bgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title='개봉 예정작'>
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              bgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='인기 영화'>
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              bgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color='#e74c3c' text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
