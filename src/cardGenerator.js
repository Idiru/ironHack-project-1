function cardGenerator() {

    const cards = []


    // to be implemented later on
    // cards.push(new Card("The Hermit", "/pic/hermit.png", [[20, -20], [-2, 40]]))

    cards.push(new Card("The Hermit", "/pic/hermit.png",
        {
            swipeLeft: {
                religion: 20,
                money: -20
            },
            swipeRight: {
                religion: -2,
                money: 40
            }
        }))

    cards.push(new Card("Homeless guy", "/pic/homeless-guy.png",
        {
            swipeLeft: {
                religion: 20,
                money: -20
            },
            swipeRight: {
                religion: -2,
                money: 40
            }
        }))

    cards.push(new Card("Priest", "/pic/priest.png",
        {
            swipeLeft: {
                religion: 200,
                money: -200
            },
            swipeRight: {
                religion: -2,
                money: 40
            }
        }))


    return cards
}