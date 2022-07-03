class myString {
  constructor(text) {
    this.text = text;
  }

  getLength() {
    let length = 0;
    while (this.text[length] !== undefined) {
      length++;
    }
    return length;
  }

  concat(otherText) {
    return `${this.text} ${otherText}`;
  }

  elementAt(element) {
    return this.text.indexOf(element);
  }

  subText(start, end) {
    return this.text.substring(start, end);
  }
}

myObject = new myString("keep moving");
console.log(myObject.getLength());
console.log(myObject.concat("girl!"));
console.log(myObject.elementAt("m"));
console.log(myObject.subText(3, 6));
