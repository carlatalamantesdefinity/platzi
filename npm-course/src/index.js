const phrases = ["You live and you learn",
    "The road to success and the road to failure are almost exactly the same",
    "Don’t let yesterday take up too much of today",
    "Either you run the day or the day runs you",
    "Be a positive energy trampoline – absorb what you need and rebound more back."]

const randomPhrase = () => {
    const radomNumber = Math.floor(Math.random() * phrases.length)
    const phrase = phrases[radomNumber]
    console.log(phrase)
}

module.exports = { randomPhrase }