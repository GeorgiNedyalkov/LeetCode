function isIsomorphic(s, t) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], t[i]);
  }

  console.log(map);
}

isIsomorphic("paper", "toilet");
