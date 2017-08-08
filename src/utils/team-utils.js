const getShortName = (fullName) => {
  const idx = fullName.indexOf(' FC');
  if (idx === -1) {
    return fullName;
  }

  return fullName.substring(0, idx);
};


// Sadly the api doesn't include the id of the team in its response, so we'll have to
// extract it from the link it provides
const getTeamId = (teamLink) => {
  const parts = teamLink.split('/');
  return parseInt(parts[parts.length - 1], 10);
};

export { getShortName, getTeamId };
