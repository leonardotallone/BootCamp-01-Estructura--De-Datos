function Queue() {
  this.head = 0;
  this.tail = 0;
  this.data = [];
}
Queue.prototype.enqueue = function (element) {
  this.data[this.tail] = element;
  this.tail++;
};
Queue.prototype.dequeue = function () {
  if (!this.data[this.head]) return undefined;
  let value = this.data[this.head];
  this.head++;
  return value;
};
Queue.prototype.size = function () {
  return this.tail - this.head;       
};

// https://www.youtube.com/watch?v=wrRbJdj3vzc&list=PL4_MwHNSSKhwUedEmre4dD2BbgiWmeiWR
