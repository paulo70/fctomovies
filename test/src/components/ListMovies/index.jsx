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
      <p>Título: {title}</p>
      <p>Data de Lançamento: {release_date}</p>
      <p>Avaliação: {vote_average}</p>
    </Card>
  )
}

export default Movies