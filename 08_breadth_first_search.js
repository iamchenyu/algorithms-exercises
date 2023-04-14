const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
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
  const search = new Set();

  if (graph[name]) {
    graph[name].forEach((friend) => search.add(friend));

    for (let friend of search) {
      if (personIsSeller(friend)) return true;
      else {
        graph[friend].forEach((f) => search.add(f));
      }
    }
  }
  return false;
};

findMangoSeller("you");
