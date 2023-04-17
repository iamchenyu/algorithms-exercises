const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy", "you"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

/**
 * Determine whether a person is a seller
 * @param {string} name Friend's name
 * @returns {boolean} Result of checking
 */
const personIsSeller = (name) => name[name.length - 1] === "m";

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @returns {boolean} Search results
 */

const findMangoSeller = (name) => {
  let searching = graph[name];
  const searched = new Set();

  while (searching.length) {
    const cur = searching.shift();

    if (!searched.has(cur)) {
      if (personIsSeller(cur)) return true;
      searching.push(...graph[cur]);
      searched.add(cur);
    }
  }
  return false;
};

findMangoSeller("you");
