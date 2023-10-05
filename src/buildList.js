const { version } = require("../package.json");
const metisGoerli = require("./tokens/metis-goerli.json");
const metisAndromeda = require("./tokens/metis-andromeda.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Hercules default token list",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://app.camelot.exchange/images/logo-sm.svg", // TO-DO
    keywords: ["hercules", "default"],
    tokens: [...metisGoerli, ...metisAndromeda]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
