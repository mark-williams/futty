const baseUrl = 'http://api.football-data.org/v1'; 

const getLeagueTable = () => {
  const headers = new Headers();
  headers.append('X-Auth-Token', 'f72b1391ce7c41fdba548dfeede42897');
  return fetch(baseUrl + '/competitions/426/leagueTable', { headers: headers });
};

export { getLeagueTable };
