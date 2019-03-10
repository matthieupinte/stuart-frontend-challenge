import fetchival from 'fetchival'

export const geocode = (payload) =>
  fetchival('https://stuart-frontend-challenge.now.sh/geocode').post(payload)

export default {
  geocode
}
