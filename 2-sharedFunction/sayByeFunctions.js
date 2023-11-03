function quickBye(name) {
    console.log('bye', name)
}
function formalBye(name) {
    console.log("Good night, good night! Parting is such sweet sorrow, That I shall say good night till it be morrow. My necessaries are embark'd: farewell. Adieu",name,"!")
}

module.exports = {
    quickBye, formalBye
}