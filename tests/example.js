import axios from 'axios';
import _upperFirst from 'lodash/upperFirst'
import _toLower from 'lodash/toLower'

export async function fetchMovieTitle() {
  const OMDB_API_KEY = '7035c60c'
  const url = 
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=tt4520988`
  const res = await axios.get(url)
  return _upperFirst(_toLower(res.data.Title))
}