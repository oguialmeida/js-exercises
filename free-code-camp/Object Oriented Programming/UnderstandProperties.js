// Add the own properties of canary to the array ownProps.
function Bird(name) {
    this.name = name
    this.numLegs = 2
}

let canary = new Bird("Tweety")
let ownProps = []
// Only change code below this line
for (let property in canary) {
    ownProps.push(property)
}
