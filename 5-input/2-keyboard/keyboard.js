console.log("what's your name?")

process.stdin.on('data', data=>{
    const name = data.toString().trim()
    console.log('Hi', name)
})