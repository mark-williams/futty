const baseUrl = 'http://api.football-data.org/v1';
const apiKey = 'f72b1391ce7c41fdba548dfeede42897';
const getHeaders = () => {
  const headers = new Headers();
  headers.append('X-Auth-Token', apiKey);

  return headers;
};

const getLeagueTable = () => {
  return fetch(baseUrl + '/competitions/445/leagueTable', { headers: getHeaders() });
};

const getTeam = (id) => {
  return fetch(`${baseUrl}/teams/${id}`, { headers: getHeaders() });
};

const getFixtures = (id) => {
  return fetch(`${baseUrl}/teams/${id}/fixtures`, { headers: getHeaders() });
};

export { getLeagueTable, getTeam, getFixtures };
