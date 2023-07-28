export const getIcon = (name: string) => {
  const icon = require(`../assets/cryptoicons/${name.toLowerCase()}.png`) || require(`../assets/cryptoicons/aleo.png`);
  return icon;
};
