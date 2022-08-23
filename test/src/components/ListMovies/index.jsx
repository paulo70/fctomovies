import Card from '../Card'

const Movies = ({
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
  return (
    <Card>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt='poster' />
      <p>{title}</p>
      <p>{release_date}</p>
      <p>{vote_average}</p>
    </Card>
  )
}

export default Movies