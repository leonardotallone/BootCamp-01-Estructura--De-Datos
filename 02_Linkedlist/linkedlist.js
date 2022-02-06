// https://www.youtube.com/watch?v=JMnAJZKe0ng&list=PL4_MwHNSSKhwUedEmre4dD2BbgiWmeiWR&t=35s

function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

LinkedList.prototype.addToTail = function (value) {
  const newTail = new Node(value);
  newTail.previous = this.tail; //aca engancho el nuevo nodo con el anterior
  newTail.next = null; //aca engancho el nuevo nodo con el siguiente (que no existe)
  if (this.tail) {
    this.tail.next = newTail;
  } else this.head = newTail; //para el caso que sea el primer elemento
  this.tail = newTail;
};
LinkedList.prototype.addToHead = function (value) {
  const newHead = new Node(value);
  newHead.previous = null; //aca engancho el nuevo nodo con el anterior
  newHead.next = this.head; //aca engancho el nuevo nodo con el siguiente (que no existe)
  if (this.head) {
    this.head.previous = newHead;
  } else this.tail = newHead; //para el caso que sea el primer elemento
  this.head = newHead;
};
LinkedList.prototype.removeTail = function () {
  if (!this.tail) return undefined;
  const oldValue = this.tail.value; //conservo solo el valor,no el nodo.
  this.tail = this.tail.previous; //asigno quien es el nuevo tail
  if (this.tail) {
    this.tail.next = null; // desengancho el nuevo tail del anterior
  } else {
    this.head = null;
  }
  return oldValue;
};
LinkedList.prototype.removeHead = function () {
  if (!this.head) return undefined; //expect linea 25 .toBeFalsy()
  const oldValue = this.head.value; //conservo solo el valor,no el nodo.
  this.head = this.head.next; //asigno quien es el nuevo head
  if (this.head) {
    this.head.previous = null; // desengancho el nuevo head del anterior
  } else {
    this.tail = null;
  }

  return oldValue;
};

function isFn(fn) {
  return typeof fn === "function";
}
LinkedList.prototype.search = function (predicate) {
  let correct = isFn(predicate)
    ? predicate
    : function (value) {
        return value === predicate;
      };

  let currentNode = this.head; //aca no se puede usar const
  while (currentNode) {
    if (correct(currentNode.value)) {
      return currentNode.value;
    } else {
      currentNode = currentNode.next;
    }
  }
  return null;
};
