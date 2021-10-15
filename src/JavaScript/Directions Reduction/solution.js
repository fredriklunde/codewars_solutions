function dirReduc(arr) {
  var simplifiedRout = arr;
  var routeCanBeSimplified = true;
  while (routeCanBeSimplified) {
    simplifiedRout = simplyfyRoute(simplifiedRout);
    if (!checkIfRouteCanBeSimplified(simplifiedRout)) {
      routeCanBeSimplified = false;
    }
  }
  return simplifiedRout;
}

function getOposite(dirr) {
  switch (dirr) {
    case "NORTH":
      return "SOUTH";
    case "SOUTH":
      return "NORTH";
    case "EAST":
      return "WEST";
    case "WEST":
      return "EAST";
  }
}

function simplyfyRoute(route) {
  var simplifiedRout = [];
  for (var i = 0; i < route.length; i++) {
    if (getOposite(route[i]) === route[i + 1]) {
      i++;
    } else {
      simplifiedRout.push(route[i]);
    }
  }
  return simplifiedRout;
}

function checkIfRouteCanBeSimplified(route) {
  for (var i = 0; i < route.length; i++) {
    if (getOposite(route[i]) === route[i + 1]) {
      return true;
    }
  }
  return false;
}

module.exports = dirReduc