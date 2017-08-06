const getShortName = (fullName) => {
  const idx = fullName.indexOf(' FC');
  if (idx === -1) {
    return fullName;
  }

  return fullName.substring(0, idx);
};

export default getShortName;
