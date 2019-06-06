"use strict"

module.exports = handler;

async function* handler(req, res) {

    try {
	let p = 0
	let s = 1

	for (let i=0; i<req.query.n; i+=1) {
	    if (i % 1000 == 0) yield null
	    let a = s
	    s += p
	    p = a
	}

	//console.log("The n'th fibonacci number is: ", p)

	res.status(200).send(p.toString())
    } catch(e) {
	res.status(500).send(e.message)
    }
}
