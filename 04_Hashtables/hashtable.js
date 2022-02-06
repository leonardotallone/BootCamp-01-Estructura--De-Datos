function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
HashTable.prototype.hash = function (palabra) {
  let total = 0;
  for (let i = 0; i < palabra.length; i++) {
    total = total + palabra[i].charCodeAt();
  }
  return total % this.numBuckets;
};
HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw new TypeError("Keys must be strings");
  let keyHasheado = this.hash(key);
  if (!this.buckets[keyHasheado]) this.buckets[keyHasheado] = new Linkedlist(); // Evitando Colisiones
  this.bucket[keyHasheado].addToHead({ key: key, value: value }); // Evitando Colisiones
};
HashTable.prototype.get = function (key) {
  let keyHasheado = this.hash(key);
  let found = this.buckets[keyHasheado].search(function (objeto) {
    if (objeto.key === key) {
      return true;
    }
    return false;
  });
  if (found) {
    return found.value;
  }
};
HashTable.prototype.hasKey = function (key) {
  if (this.get(key)) return true;
  return false;
};
