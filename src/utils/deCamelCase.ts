const camelCaseRegex = new RegExp(/[A-Z]+/g);
export const deCamelCase = (key: string) => {
  const matches = key.matchAll(camelCaseRegex);
  for (let match of matches) {
    if (match.index) key = key.replace(match[0], '-' + match[0].toLowerCase());
  }
  return key;
};
