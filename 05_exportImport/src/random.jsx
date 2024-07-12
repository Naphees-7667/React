function Random() {
    let randomNum = Math.floor(Math.random()*100)
    return <h1>Random Number - {randomNum}</h1>
}

export default Random