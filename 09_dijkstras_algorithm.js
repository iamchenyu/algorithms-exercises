// implement a hash table for the graph
const graph = {
  start: { a: 6, b: 2 },
  a: { finish: 1 },
  b: { a: 3, finish: 5 },
  finish: null,
};

// implement a hash table for costs
const costs = {
  a: 6,
  b: 2,
  finish: Infinity,
};

// implement a hash table for parent
const parent = {
  a: "start",
  b: "start",
  finish: null,
};

let processed = [];

// write a function to find the node with the lowest cost in the costs table
const findCheapestNode = (table) => {
  let cheapestCost = Infinity;
  let cheapestNode;
  for (let key in table) {
    if (table[key] < cheapestCost && !processed.includes(key)) {
      cheapestCost = table[key];
      cheapestNode = key;
    }
  }
  return cheapestNode;
};

// implement dijkstra's algorithm
// find the cheapeast node
let cheapest = findCheapestNode(costs);

while (cheapest) {
  //get and update its neighbors' cost and parent
  for (let neighbor in graph[cheapest]) {
    costs[neighbor] = costs[cheapest] + graph[cheapest][neighbor];
    parent[neighbor] = cheapest;
  }
  // mark this node as processed
  processed.push(cheapest);
  // find the next cheapeast node
  cheapest = findCheapestNode(costs);
}

console.log(costs);
console.log(parent);
