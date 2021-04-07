export const getContacts = (url, setContacts, alertHandler, setLoading, loading) => {
  fetch(url)
    .then(response => response.json())
    .then(responseJSON => setContacts(responseJSON.results))
    .catch(error => alertHandler(error))
    .finally(setLoading(!loading))
}

export const getAlbums = (url, setAlbums, alertHandler, setLoading, loading) => {
  fetch(url)
    .then(response => response.json())
    .then(responseJSON => setAlbums(responseJSON))
    .catch(error => alertHandler(error))
    .finally(setLoading(!loading))
}
