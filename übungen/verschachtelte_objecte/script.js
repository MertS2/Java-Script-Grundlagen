/* 🚀 Logge in der console vom unten stehenden Objekt "library" folgendes aus:

den Standort der Bibliothek
die Verfügbarkeit des Buches "1984"


🚀 Knacker: Erstelle eine Liste der fiktionalen Büchernamen (nutze eine for-Schleife) und logge diese in der console aus.
 */

let library = {
    "info": {
        "name": "Stadtbibliothek",
        "location": {
            "city": "Musterstadt",
            "coordinates": { "lat": 48.1351, "lon": 11.582 }
        }
    },
    "sections": {
        "fiction": [
            {
                "shelf": 1,
                "book": {
                    "title": "Die Verwandlung",
                    "author": {
                        "name": "Franz Kafka",
                        "born": "1883-07-03",
                        "died": "1924-06-03"
                    },
                    "year": 1915,
                    "status": "ausgeliehen"
                }
            },
            {
                "shelf": 2,
                "book": {
                    "title": "1984",
                    "author": {
                        "name": "George Orwell",
                        "born": "1903-06-25",
                        "died": "1950-01-21"
                    },
                    "year": 1949,
                    "status": "verfügbar"
                }
            }
        ],
        "nonFiction": [
            {
                "shelf": 3,
                "book": {
                    "title": "Eine kurze Geschichte der Zeit",
                    "author": {
                        "name": "Stephen Hawking",
                        "born": "1942-01-08",
                        "died": "2018-03-14"
                    },
                    "year": 1988,
                    "status": "verfügbar"
                }
            }
        ]
    }
}


console.log(` Stadt = ${library.info.location.city}`)
console.log(`Verfügbarkeit des Buches 1984 ${library.sections.fiction[1].book.status}`)

function knacker() {
    

    for (let i = 0; i < library.sections.fiction.length; i++) {
        console.log(library.sections.fiction[i].book.title)

    }

    for (let i = 0; i < library.sections.nonFiction.length; i++) {
        console.log(library.sections.nonFiction[i].book.title)
    }
}
knacker()

