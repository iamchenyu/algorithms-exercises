// define all states we want to cover
let states_to_cover = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// implement a hash table for all stations
const stations = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "ca"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
};

let finalListOfStations = new Set();

while (states_to_cover.size > 0) {
  let best_station;
  let covered_states = new Set();

  for (let [station, states] of Object.entries(stations)) {
    let covered = new Set();

    for (const s of states) {
      if (states_to_cover.has(s)) {
        covered.add(s);
      }
    }
    if (covered.size > covered_states.size) {
      best_station = station;
      covered_states = covered;
    }
  }

  finalListOfStations.add(best_station);

  for (const s of covered_states) {
    if (states_to_cover.has(s)) {
      states_to_cover.delete(s);
    }
  }

  delete stations[best_station];
}

console.log(finalListOfStations);
