export const FirstAllWords = (str) => {
  const pieces = str.split(' ');
  for (let i = 0; i < pieces.length; i++) {
    const j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join(' ');
};
