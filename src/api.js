import fetchival from 'fetchival'

export const geocode = (payload) =>
  fetchival('https://stuart-frontend-challenge.now.sh/geocode').post(payload)

export const createJob = (payload) =>
  fetchival('https://stuart-frontend-challenge.now.sh/jobs').post(payload)

export default {
  geocode,
  createJob,
}
