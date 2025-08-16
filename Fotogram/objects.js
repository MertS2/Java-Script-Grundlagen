let show_more = "show mroe";

let objects = [{
    headlines: "Belgien",
    image: "./assets/belgium-4966646_1280.jpg",
    show_more,
    description:
        `Belgien, ein kleines Land mit großer Vielfalt, begeistert mit mittelalterlichen Städten, 
                kulinarischen Highlights wie Waffeln und Schokolade sowie einer reichen Kultur. 
                Ob Brüssel mit seinem charmanten Zentrum oder die Grachten von Brügge – 
                Belgien vereint Geschichte, Stil und Genuss.`,
    site: "https://de.wikipedia.org/wiki/Belgien",
},
{
    headline: "Berlin",
    image: "./assets/berlin-61994_1280.jpg",
    show_more,
    description:
        `   Berlin, die deutsche Hauptstadt, ist ein pulsierendes Zentrum für Kultur, Geschichte und Kreativität. 
                    Mit ihrer bewegten Vergangenheit, ikonischen Sehenswürdigkeiten wie dem Brandenburger Tor und der East Side Gallery 
                    sowie einer vielfältigen Kulturszene zieht Berlin Besucher aus aller Welt in ihren Bann.`,
    site: "https://de.wikipedia.org/wiki/Berlin",
},
{
    headline: "Kopenhagen",
    image: "./assets/copenhagen-4746327_1280.jpg",
    show_more,
    description:
        `   Kopenhagen, die Hauptstadt Dänemarks, verbindet skandinavisches Design mit entspannter Lebensart. 
            Die farbenfrohen Häuser von Nyhavn, moderne Architektur, Fahrräder und Nachhaltigkeit prägen das Stadtbild – 
            ein Ort, der Tradition und Innovation harmonisch vereint.`,
    site: "https://de.wikipedia.org/wiki/Kopenhagen",
},
{
    headline: "Istanbul",
    image: "./assets/galata-4043037_1280.jpg",
    show_more,
    description: `   Istanbul, die Stadt auf zwei Kontinenten, ist ein Schmelztiegel der Kulturen. Zwischen Moscheen, Palästen, 
        Basaren und modernen Cafés spürt man überall die reiche Geschichte des Osmanischen Reiches. 
        Istanbul fasziniert durch seine Dynamik und Tiefe.`,
    site: "https://de.wikipedia.org/wiki/Istanbul",
},
{
    headline: "Las Vegas",
    image: "./assets/las-vegas-2722762_1280.jpg",
    show_more: "show more",
    description: `Las Vegas, die Glitzermetropole in der Wüste Nevadas, steht für Unterhaltung pur. Von beeindruckenden Casinos 
        über spektakuläre Shows bis zu funkelnden Hotels – in Las Vegas wird die Nacht zum Tag und jeder Besuch zum Erlebnis.`,
    site: "https://de.wikipedia.org/wiki/Las_Vegas"
},
{
    headline: "Linz",
    image: "./assets/linz-3743776_1280.jpg",
    show_more: "show more",
    description: `Linz, die drittgrößte Stadt Österreichs, liegt malerisch an der Donau und überrascht mit moderner Kunst, 
        digitaler Innovation und historischer Architektur. Die Mischung aus Technik, Kultur und Natur macht Linz besonders lebenswert.`,
    site: "https://de.wikipedia.org/wiki/Linz"
},
{
    headline: "Los Angeles",
    image: "./assets/los-angeles-3580722_1280.jpg",
    show_more: "show more",
    description: `Los Angeles, die Stadt der Engel, ist ein Zentrum für Film, Kunst und Lifestyle. Von den Stränden von Santa Monica 
        bis zu den Studios von Hollywood bietet L.A. Sonne, Vielfalt und kreatives Flair in Hülle und Fülle.`,
    site: "https://de.wikipedia.org/wiki/Los_Angeles"
},
{
    headline: "Mallorca",
    image: "./assets/mallorca-3690605_1280.jpg",
    show_more: "show more",
    description: `Mallorca, die größte Insel der Balearen, begeistert mit atemberaubenden Küsten, charmanten Dörfern 
        und einer faszinierenden Mischung aus Natur und Kultur. Ob entspannter Strandurlaub, Wanderungen in der Serra de Tramuntana 
        oder Erkundung der historischen Altstadt von Palma – Mallorca bietet für jeden etwas.`,
    site: "https://de.wikipedia.org/wiki/Mallorca"
},
{
    headline: "Paris",
    image: "./assets/paris-1726315_1280.jpg",
    show_more: "show more",
    description: `Paris, die Stadt der Liebe, verführt mit Eleganz, Romantik und Kunst. Vom Eiffelturm über den Louvre 
        bis zu charmanten Straßencafés – Paris ist ein Fest für alle Sinne und ein Symbol europäischer Kultur.`,
    site: "https://de.wikipedia.org/wiki/Paris"
},
{
    headline: "Singapur",
    image: "./assets/singapore-1927720_1280.jpg",
    show_more: "show more",
    description: `Singapur, die Hightech-Metropole in Südostasien, verbindet beeindruckende Skyline mit tropischem Flair. 
        Zwischen futuristischen Gärten, traditioneller Chinatown und kulinarischer Vielfalt zeigt sich Singapur als globaler Hotspot.`,
    site: "https://de.wikipedia.org/wiki/Singapur"
},
{
    headline: "Stuttgart",
    image: "./assets/stuttgart-68760_1280.jpg",
    show_more: "show more",
    description: `Stuttgart, eingebettet in Weinberge, ist das Herz der schwäbischen Region und bekannt für Automobilgeschichte, 
        kulturelle Vielfalt und moderne Architektur. Ob Mercedes-Benz-Museum oder Schlossplatz – Stuttgart bietet urbane Eleganz und Tradition.`,
    site: "https://de.wikipedia.org/wiki/Stuttgart"
},
{
    headline: "Schweiz",
    image: "./assets/switzerland-7899656_1280.jpg",
    show_more: "show more",
    description: `Die Schweiz begeistert mit majestätischen Alpen, glasklaren Seen und einem hohen Lebensstandard. 
        Städte wie Zürich, Genf oder Luzern vereinen Natur, Präzision und kulturelle Vielfalt auf kleinstem Raum.`,
    site: "https://de.wikipedia.org/wiki/Schweiz"
},
{
    headline: "Antalya",
    image: "./assets/antalya-7572191_1280.jpg",
    show_more: "show more",
    description: `Antalya, die Perle der türkischen Riviera, verbindet traumhafte Strände mit historischen Stätten 
        wie dem Hadrianstor oder der Altstadt Kaleiçi. Sonne, Meer und orientalischer Charme machen Antalya zu einem beliebten Reiseziel.`,
    site: "https://de.wikipedia.org/wiki/Antalya"
},
{
    headline: "Dubai",
    image: "./assets/dubai-1227538_1280.jpg",
    show_more: "show more",
    description: `Dubai, die glitzernde Metropole in den Vereinigten Arabischen Emiraten, steht für Luxus, Innovation und Superlative. 
        Vom Burj Khalifa bis zu künstlichen Inseln – Dubai beeindruckt mit futuristischem Städtebau und orientalischer Gastfreundschaft.`,
    site: "https://de.wikipedia.org/wiki/Dubai"
},
{
    headline: "Izmir",
    image: "./assets/sea-984944_1280.jpg",
    show_more: "show more",
    description: `İzmir, gelegen an der Westküste der Türkei, ist eine lebendige Hafenstadt mit einer reichen Geschichte, 
        die bis in die Antike zurückreicht. Bekannt für ihr mildes Klima, die mediterrane Lebensart und ihre herzliche Atmosphäre, 
        verbindet İzmir modernes Stadtleben mit antiken Wurzeln.`,
    site: "https://de.wikipedia.org/wiki/Izmir"
},
{
    headline: "Alanya",
    image: "./assets/alanya-3758816_1280.jpg",
    show_more: "show more",
    description: `Alanya, die sonnenverwöhnte Perle an der Türkischen Riviera, vereint mediterrane Gelassenheit mit historischem Charme.
        Vom majestätischen Burgberg mit Blick auf die azurblaue Küste bis zu endlosen Sandstränden – Alanya begeistert mit malerischer Natur, 
        lebendiger Kultur und herzlicher türkischer Gastfreundschaft.`,
    site: "https://de.wikipedia.org/wiki/Alanya"
},
{
    headline: "Zypern",
    image: "./assets/cyprus-7692597_1280.jpg",
    show_more: "show more",
    description: `Zypern, die sonnenverwöhnte Insel im östlichen Mittelmeer, vereint mediterrane Lebensfreude mit einer faszinierenden Mischung aus Kulturen. 
        Von goldenen Stränden und türkisblauem Meer bis zu uralten Ruinen und charmanten Bergdörfern – Zypern verzaubert mit abwechslungsreicher Natur, 
        reicher Geschichte und der warmherzigen Gastfreundschaft seiner Menschen.`,
    site: "https://de.wikipedia.org/wiki/Zypern"
},
{
    headline: "Rom",
    image: "./assets/colosseum-5773684_1280.jpg",
    show_more: "show more",
    description: `Rom, die ewige Stadt am Tiber, vereint jahrtausendealte Geschichte mit italienischem Lebensgefühl. Zwischen majestätischen Bauwerken wie dem Kolosseum und dem Petersdom, 
        charmanten Piazzas und belebten Gassen entfaltet sich ein einzigartiges Flair aus Kultur, Genuss und Dolce Vita – ein Ort, an dem Vergangenheit und Gegenwart harmonisch verschmelzen.`,
    site: "https://de.wikipedia.org/wiki/Rom"
},
];