// https://www.youtube.com/watch?v=Q83q3gok0hg (explicacion de Arboles)
//https://www.youtube.com/watch?v=VQluLJRwgcU&list=PL4_MwHNSSKhzZo6d0QzfnRap_3BExThIE

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.contador = 1;
}
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value); //esta es la recursion. Ejecuta el inser en la nueva posicion.
    }
    const nuevoArbol = new BinarySearchTree(value); //aca se genera el nuevo arbol
    this.left = nuevoArbol; // Aca se inserta
  }
  if (value > this.value) {
    if (this.right) {
      return this.right.insert(value); //esta es la recursion. Ejecuta el inser en la nueva posicion.
    }
    const nuevoArbol = new BinarySearchTree(value); //aca se genera el nuevo arbol
    this.right = nuevoArbol; // Aca se inserta
  }

  this.contador++;
};
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value && this.left) return this.left.contains(value); // esta es la recursion.
  if (value > this.value && this.right) return this.right.contains(value); // esta es la recursion.
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (
  fn,
  option = "in-order"
) {
  if (option === "in-order") {
    if (this.left) this.left.depthFirstForEach(fn, option);
    fn(this.value);
    if (this.right) this.right.depthFirstForEach(fn, option);
  }
  if (option === "pre-order") {
    fn(this.value);
    if (this.left) this.left.depthFirstForEach(fn, option);
    if (this.right) this.right.depthFirstForEach(fn, option);
  }
  if (option === "post-order") {
    if (this.left) this.left.depthFirstForEach(fn, option);
    if (this.right) this.right.depthFirstForEach(fn, option);
    fn(this.value);
  }
};
const queue = [];
BinarySearchTree.prototype.breadthFirstForEach = function (fn) {
  fn(this.value);
  if (this.left) queue.push(this.left);
  if (this.right) queue.push(this.right);
  const firstQueueObj = queue.shift();
  if (firstQueueObj) {
    firstQueueObj.breadthFirstForEach(fn);
  }
};
BinarySearchTree.prototype.size = function () {
  return this.contador;
};
