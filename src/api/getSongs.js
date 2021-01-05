export default async(req, res) => {
    if(request.method === 'GET'){
        await fetch("https://shazam.p.rapidapi.com/auto-complete", {
            method: "GET",
            headers: {
                "x-rapidapi-key": "b545cc0c9fmsh99eb19dad714458p1d851bjsn1078d70b3e88",
	            "x-rapidapi-host": "shazam.p.rapidapi.com",
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        });
    } else {
        return {error: "Method not allowed!"}
    }
}