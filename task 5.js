function myString(text) {
  this.text = text;

  this.getLength = function () {
    let length = 0;
    while (this.text[length] !== undefined) {
      length++;
    }
    return length;
  };

  this.concat = function (otherText) {
    return `${this.text} ${otherText}`;
  };

  this.elementAt = function (element) {
    return this.text.indexOf(element);
  };
  this.subText = function (start, end) {
    return this.text.substring(start, end);
  };
}

let myObject = new myString("keep moving");
console.log(myObject.getLength());
console.log(myObject.concat("girl!"));
console.log(myObject.elementAt("m"));
console.log(myObject.subText(3, 6));
