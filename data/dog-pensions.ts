export const dogPensionsByViewpoint: Record<string, any[]> = {
  //  Baden-Württemberg

  // 📍 Schlossberg, Freiburg
  "bw-1": [
    {
      id: "pension-freiburg-1",
      name: "Hundepension Freiburg Dreisamtal",
      distance: 8, // grobe Schätzung je nach Standort
      phone: "07661-989070",
      website: "https://hundepension-freiburg-dreisamtal.de/",
      description: "Großzügige Pension auf dem historischen Prissenhof bei Freiburg mit Freilauf, Einzel- oder Gemeinschaftszimmern. "  
      // Quelle: :contentReference[oaicite:0]{index=0}  
   
    },
    {
      id: "pension-freiburg-2",
      name: "Tier-Center Freiburg Hundepension",
      distance: 5, // je nach Stadtteil
      phone: "+49 761 (entsprechend Tier-Center)",  
      website: "https://tier-center.de/Pension/",
      description: "Tages- und Urlaubspension im Tier-Center Freiburg mit Zwingern. Preise gestaffelt nach Gewicht."  
      // Quelle: :contentReference[oaicite:1]{index=1}  
    }
  ],

  // 📍 Merkur, Baden-Baden1
  "bw-2": [
    {
      id: "pension-badenbaden-2",
      name: "4 Pfoten Paradies",
      distance: 25, // etwas weiter
      phone: "(siehe Webseite)",  
      website: "https://www.4pfoten-paradies.de/",
      description: "Seriöse Familienbetreuung ohne Zwingerhaltung, Abhol- und Bringservice."  
      // Quelle: :contentReference[oaicite:3]{index=3}  
    }
  ],

  // 📍 Feldberg, Schwarzwald
  "bw-3": [
    {
      id: "pension-feldberg-1",
      name: "Private Betreuer Titisee-Neustadt",
      distance: 10, // grobe Schätzung
      phone: "(siehe Plattform)",
      website: "https://tierio.de/de/private-hundepension/bw/titisee-neustadt",
      description: "Private Hundebetreuung / Pension in der Region Titisee-Neustadt (Hochschwarzwald)."  
      // Quelle: :contentReference[oaicite:4]{index=4}  
    },
    {
      id: "pension-feldberg-2",
      name: "Gudog Hundebetreuung Titisee-Neustadt",
      distance: 8,
      phone: "(über Plattform)",
      website: "https://gudog.de/hundesitter-titisee-neustadt",
      description: "Übernachtung bei einem privaten Sitter via Gudog als Alternative zur klassischen Hundepension."  
      // Quelle: :contentReference[oaicite:5]{index=5}  
    }
  ],

  // 📍 Hohentwiel, Singen
  "bw-4": [
    {
      id: "pension-singen-1",
      name: "Sylvias Tiersitting",
      distance: 6, // Singen nähe Hohentwiel
      phone: "(siehe Webseite)",
      website: "https://sylvias-tiersitting.de/",
      description: "Familiäre Hundepension in Gottmadingen (nahe Singen), mit persönlicher und liebevoller Betreuung."  
      // Quelle: :contentReference[oaicite:6]{index=6}  
    },
    {
      id: "pension-singen-2",
      name: "Fellhotel Bodensee",
      distance: ~30, // etwas weiter, ca. 30 min laut Webseite
      phone: "07777-9395813",
      website: "https://www.fellhotel.net/",
      description: "Hundepension ohne Zwinger zwischen Stockach und Meßkirch – ruhiges Urlaubsdomizil für Hunde."  
      // Quelle: :contentReference[oaicite:7]{index=7}  
    }
  ],

  // 📍 Belchen, Schwarzwald
  "bw-5": [
    {
      id: "pension-belchen-2",
      name: "4 Pfoten Paradies",
      distance:" 20–30, je nach Standort",
      phone: "(siehe Webseite)",
      website: "https://www.4pfoten-paradies.de/",
      description: "Flexibel betreut, familienfreundlich, ideal wenn keine klassische Pension direkt am Berg vorhanden ist."  
      // Quelle: :contentReference[oaicite:9]{index=9}  
    }
  ],
  
  // … für die anderen Aussichtspunkte (Achalm, Hohenzollern, Pforzheim, Uracher Wasserfall, Lichtenstein Castle, Bärenhöhle Sonnenbühl, Randen, Blaubeuren, Blauen, Hohlohturm, Maienberg, Donzdorf, Höwenegg, Hohenstoffeln)  
  // habe ich aktuell **keine klar dokumentierten klassischen Hundepensionen** in sehr unmittelbarer Nähe gefunden, sondern oft nur Sitter-Alternativen, Tagesbetreuungen oder eine sehr eingeschränkte Auswahl.  
  // Beispiel:  

  // 📍 Achalm, Reutlingen
  "bw-6": [
    {
      id: "pension-reutlingen-1",
      name: "Hundezentrum Schwaben / Hundehotel Reutlingen",
      distance: 5,  
      phone: "(siehe Webseite)",  
      website: "https://hundezentrum-schwaben.de/hundehotel/",  
      description: "Großzügige Anlage zur Übernachtung und Tagesbetreuung in Reutlingen."  
      // Quelle: :contentReference[oaicite:16]{index=16}  
    },
    {
      id: "pension-reutlingen-2",
      name: "Hundepension Lumppenhof",
      distance: 10,  
      phone: "0170 6128542",  
      website: "https://lumppenhof.de/",  
      description: "Familiäre Hundepension am Rande von Reutlingen mit Platz für wenige Hunde."  
      // Quelle: :contentReference[oaicite:17]{index=17}  
    }

  ],

    // 📍 Hohenzollern, Hechingen
  "bw-7": [
    {
      id: "pension-hechingen-1",
      name: "Holidog Sitter Hechingen",
      distance: 2, // grob
      phone: "über Holidog-Profil",
      website: "https://de.holidog.com/tiersitter--hechingen--bw",  
      description: "Private Hundebetreuung via Holidog in Hechingen – familiär, ohne Zwinger."  
      // Quelle: :contentReference[oaicite:0]{index=0}  
    },
    {
      id: "pension-hechingen-2",
      name: "Pawshake Sitter Hechingen",
      distance: 3,
      phone: "über Pawshake",
      website: "https://www.pawshake.de/hundebetreuung/hechingen-bw",  
      description: "Übernachtbetreuung bei einem Pawshake-Sitter in Hechingen."  
      // Quelle: :contentReference[oaicite:1]{index=1}  
    }
  ],

  // 📍 Aussichtsturm Pforzheim, Pforzheim
  "bw-8": [
    {
      id: "pension-pforzheim-1",
      name: "Gudog Betreuer Pforzheim",
      distance: 2,
      phone: "über Gudog",
      website: "https://gudog.de/unterbringung-fuer-hunde-pforzheim",  
      description: "Vertrauenswürdige Hundebetreuung in und um Pforzheim via Gudog."  
      // Quelle: :contentReference[oaicite:2]{index=2}  
    },
    {
      id: "pension-pforzheim-2",
      name: "Pawshake Sitter Pforzheim",
      distance: 1,
      phone: "über Pawshake",
      website: "https://www.pawshake.de/hundebetreuung/pforzheim-bw",  
      description: "Private Betreuung bei einem Pawshake-Sitter direkt in Pforzheim."  
      // Quelle: :contentReference[oaicite:3]{index=3}  
    }
  ],

  // 📍 Uracher Wasserfall, Bad Urach
  "bw-9": [
    /*{
      id: "pension-badurach-1",
      name: "Ute’s Tierpension",
      distance: 4, // geschätzt je nach Lage
      phone: "07381 2421",  
      website: "http://www.utes-tierpension.de",  
      description: "Tierpension in Bad Urach – Hunde auf Zeit untergebracht."  
      // Quelle: :contentReference[oaicite:4]{index=4}  
    },*/
    {
      id: "pension-badurach-2",
      name: "Holidog Sitter Bad Urach",
      distance: 2,
      phone: "über Holidog",
      website: "https://de.holidog.com/tiersitter--bad-urach--bw",  
      description: "Privater Sitter in Bad Urach über die Plattform Holidog."  
      // Quelle: :contentReference[oaicite:5]{index=5}  
    }
  ],

  // 📍 Lichtenstein Castle, Honau / Lichtenstein
  "bw-10": [
    {
      id: "pension-lichtenstein-1",
      name: "Tierio private Pension Lichtenstein",
      distance: 3,
      phone: "über Tierio-Profil",
      website: "https://tierio.de/de/private-hundepension/bw/lichtenstein",  
      description: "Private Hundepension in der Lichtenstein-Region via Tierio."  
      // Quelle: :contentReference[oaicite:6]{index=6}  
    },
    {
      id: "pension-lichtenstein-2",
      name: "Mobile Hundeschule & Pension Neuffen / Lichtenstein",
      distance: ~10,
      phone: "(siehe Webseite)",
      website: "https://menschhund.dog/",  
      description: "Hundeschule mit Übernachtbetreuung in der Region Neuffen / Lichtenstein."  
      // Quelle: :contentReference[oaicite:7]{index=7}  
    }
  ],

  // 📍 Bärenhöhle, Sonnenbühl
  "bw-11": [
    {
      id: "pension-sonnenbuehl-1",
      name: "LeVa Tierbetreuung Sonnenbühl",
      distance: 1,
      phone: "(siehe Webseite)",
      website: "https://www.leva-tierbetreuung.de/hundepension/",  
      description: "Artgerechte Hundepension in Sonnenbühl mit Einzel- und Gruppenhaltung."  
      // Quelle: :contentReference[oaicite:8]{index=8}  
    }
    // Zweite echte Pension vor Ort konnte ich nicht sicher nachweisen
  ],

  // 📍 Randen, Hilzingen – **hier keine klassische Hundepension gefunden**, zumindest in öffentlich verfügbaren Verzeichnissen  
  "bw-12": [
    {
      id: "pension-hilzingen-1",
      name: "Holidog Sitter Hilzingen",
      distance: 5,
      phone: "über Holidog",
      website: "https://de.holidog.com",  
      description: "Private Sitter in der Umgebung Hilzingen / Randen via Holidog."  
    }
  ],

  // 📍 Blaubeuren, Blaubeuren
  "bw-13": [
    {
      id: "pension-blaubeuren-1",
      name: "LeVa Tierbetreuung Reutlingen / Umgebung",
      distance: 25, // Reutlingen ist relativ nahe
      phone: "(siehe Webseite)",
      website: "https://www.leva-tierbetreuung.de/",  
      description: "Tierbetreuung & Hundepension in der Region Reutlingen, betreut auch Hunde aus Blaubeuren."  
      // Quelle: :contentReference[oaicite:9]{index=9}  
    }
    // Zweite Pension direkt in Blaubeuren konnte ich nicht seriös verifizieren
  ],

  // 📍 Blauen (Schliengen)
  "bw-14": [
    {
      id: "pension-schliengen-1",
      name: "Tierpension Am Sonnenstück",
      distance: 2,
      phone: "07635-8265139",  
      website: "https://www.amsonnenstueck.de/tierpension_schliengen_muellheim/profil",  
      description: "Tierpension bei Kleintierpraxis in Schliengen, auch für Hunde."  
      // Quelle: :contentReference[oaicite:10]{index=10}  
    }
  ],

  // 📍 Hohlohturm, Hornisgrinde (Schwarzwald) – **Pension Moosmatt**
  "bw-15": [
    {
      id: "pension-moosmatt-1",
      name: "Hundepension Moosmatt",
      distance: 25, // je nach Lage
      phone: "(siehe Webseite)",
      website: "https://hundepension-moosmatt.de/",  
      description: "Familiäre Hundepension in Nordrach (Schwarzwald), keine Zwingerhaltung."  
      // Quelle: :contentReference[oaicite:11]{index=11}  
    }
  ],

  // 📍 Maienberg, Staufen – in Staufen / Umgebung keine klare Pension, ich finde meist Sitter  
  "bw-16": [
    {
      id: "pension-staufen-1",
      name: "Snautz Hundepension in der Region Staufen",
      distance: 5,
      phone: "über Snautz Inserate",
      website: "https://www.snautz.de/tiermarkt/hunde/betreuung/hundepension/k0c297l7970",  
      description: "Verschiedene Hundepensionen in Süd-Baden (via Snautz-Verzeichnis), evtl. eine Option für Staufen."  
      // Quelle: :contentReference[oaicite:12]{index=12}  
    }
  ],

  // 📍 Donzdorf – **keine Hundepension klar gefunden**, stattdessen Betreuung in der Region Göppingen / Alb  
  "bw-17": [
    {
      id: "pension-donzdorf-1",
      name: "Hundepension Hohenstaufen",
      distance: ~30, // Göppingen nah
      phone: "07165 / 929 399",  
      website: "https://hundepension-hohenstaufen.de/",  
      description: "Professionelle Hundepension bei Hohenstaufen, betreut Hunde aus der Umgebung Donzdorf."  
      // Quelle: :contentReference[oaicite:13]{index=13}  
    }
  ],

  // 📍 Höwenegg, Engen (Bodensee-Region)
  "bw-18": [
    {
        id: "pension-engen-1",
    name: "Royal Continentals Hundepension Hofgut Dornsberg",
    distance: "5-10 km (in der Nähe von Engen)",
    phone: "0172-6220006",
    website: "https://www.mydoggoeswuff.com/",
    description: "Hundepension / Ferienbetreuung am Bodensee, idyllisch gelegen auf dem Hofgut Dornsberg." 
      // Quelle: :contentReference[oaicite:14]{index=14}  
    }
  ],

  // 📍 Hohenstoffeln, Moos – **keine explizite Hundepension direkt im Dorf**, aber Bodenseeregion:  
  "bw-19": [
    {
    id: "pension-moos-1",
    name: "Hundezentrum Bodensee",
    distance: "~20 km (je nach Moos-Ort)",
    phone: "(siehe Webseite)",
    website: "https://hundezentrum-bodensee.de/pension/",
    description: "Professionelle Hundepension am Bodensee mit Gruppen- oder Einzelhaltung."  
      // Quelle: :contentReference[oaicite:15]{index=15}  
    }
  ],

  "bw-20": [
  {
    id: "pension-rodalben-1",
    name: "Cindy’s Hundepension & Schule Spitzzucht",
    distance: 1,  // direkt in Rodalben
    phone: "+49 6331 258619",  
    website: "http://www.vonderarnoldseiche.de/",  
    description: "Kleine, familiäre Hundepension in Rodalben mit Doppelzimmern, Auslauf und Gruppenhaltung."  
    // Quelle: :contentReference[oaicite:0]{index=0}  
  }
],


  // Bayern
  // by-1: Zugspitze (Garmisch‑Partenkirchen)
  "by-1": [
    {
      id: "hundehotel-wolf",
      name: "Hundesporthotel Wolf",
      city: "Oberammergau",
      distance: 12, // grob aus Garmisch‑Partenkirchen
      phone: "+49 8822 9233-0",
      website: "https://www.hotel-wolf.de/",
      description: "Großes Hundehotel mit drei Sporthallen, eingezäuntem Außenplatz, Seminaren & Wellness für Hund und Mensch."
    }
  ],

  // by-2: Neuschwanstein (Hohenschwangau)
  "by-2": [
    {
      id: "hundepension-satke",
      name: "Hundepension Satke",
      city: "Kaltenberg (bei München)",
      distance: 80,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/hundepension-munchen-steckbrief.html",
      description: "Pension mit großen, hellen Zimmern, keine Zwinger, sichere, eingezäunte Auslauffläche."
    }
  ],

  // by-3: Tegelberg (Neuschwanstein-Region)
  "by-3": [
    {
      id: "hundepension-satke-2",
      name: "Hundepension Satke (siehe oben)",
      city: "Kaltenberg / Umgebung",
      distance: 75,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Wie bei by‑2: ruhige Hundepension mit Auslauf‑Wiesen und professioneller Betreuung."
    }
  ],

  // by-4: Jenner (Berchtesgaden)
  "by-4": [
    {
      id: "alpenhotel-bergzauber",
      name: "Alpenhotel Bergzauber",
      city: "Schönau am Königssee (Berchtesgaden)",
      distance: 8,
      phone: "(siehe Webseite)",
      website: "https://stolls-hotel-alpina.de/aktivurlaub-berchtesgadener-land/urlaub-mit-hund-bayern/",
      description: "Hundefreundliches Hotel im Berchtesgadener Land mit Auslauf‑Möglichkeiten."
    }
  ],

  // by-5: Kehlstein (Berchtesgaden)
  "by-5": [
    {
      id: "alpenhotel-bergzauber-2",
      name: "Alpenhotel Bergzauber (wie bei Jenner)",
      city: "Schönau am Königssee",
      distance: 10,
      phone: "(siehe Webseite)",
      website: "https://stolls-hotel-alpina.de/",
      description: "Hundehotel im Berchtesgadener Land – ideal auch für Ausflüge zum Kehlstein."
    }
  ],

  // by-6: Wank (Garmisch)
  "by-6": [
    {
      id: "hundehotel-wolf-2",
      name: "Hundesporthotel Wolf (wieder)",
      city: "Oberammergau",
      distance: 15,
      phone: "+49 8822 9233-0",
      website: "https://www.hotel-wolf.de/",
      description: "Großes Hundehotel mit Sporthallen, ideal auch für Bergregionen rund um Garmisch."
    }
  ],

  // by-7: Wallberg (Tegernsee)
  "by-7": [
    {
      id: "hundepension-satke-3",
      name: "Hundepension Satke (Kaltenberg / Nähe München)",
      city: "Kaltenberg",
      distance: 70,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Ruhige Pension, geeignet, wenn man im Tegernseer Gebiet unterwegs ist."
    }
  ],

  // by-8: Herzogstand (Walchensee)
  "by-8": [
    {
      id: "hundepension-satke-4",
      name: "Hundepension Satke",
      city: "Kaltenberg / Umgebung",
      distance: 90,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Gut erreichbare Hundepension auch bei Bergtouren in den Alpen."
    }
  ],

  // by-9: Heimgarten (Walchensee)
  "by-9": [
    {
      id: "hundepension-satke-5",
      name: "Hundepension Satke (wie oben)",
      city: "Kaltenberg",
      distance: 90,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Stabile Betreuung für den Hund, wenn man in der Walchensee-Region unterwegs ist."
    }
  ],

  // by-10: Großer Arber (Bayerischer Wald / Allgäu-Region)
  "by-10": [
    {
      id: "hundehotel-allgaeu",
      name: "Hundehotel Allgäu Dogs",
      city: "Durach bei Kempten",
      distance: 130,
      phone: "(siehe Webseite)",
      website: "https://www.hundezentrum-allgaeudogs.de/hundehotel/",
      description: "Großzügige Anlage mit über 20 Zimmern, eingezäuntem Auslauf, betreut von erfahrenem Hundeprofi."
    }
  ],

  // by-11: Hohenbogen (Bayerischer Wald)
  "by-11": [
    {
      id: "hundehotel-bayerwald-1",
      name: "Landhotel Haus Waldeck",
      city: "Philippsreut (Bayerischer Wald)",
      distance: 90,
      phone: "08557‑729",
      website: "https://www.bayernreise.eu/unterkunft/hundehotel-bayern-urlaub-mit-hund.html",
      description: "Hundehotel im Bayerischen Wald mit Trainingsplatz, Spielwiese und eingezäuntem Gelände."
    }
  ],

  // by-12: Ochsenkopf (Oberfranken / Fichtelgebirge)
  "by-12": [
    {
      id: "hundepension-satke-6",
      name: "Hundepension Satke (Kaltenberg / München-Umgebung)",
      city: "Kaltenberg",
      distance: 120,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Pension mit großzügigen Ausläufen – eine Option, wenn man in Nordbayern unterwegs ist."
    }
  ],

  // by-13: Marienbrücke (Hohenschwangau / Neuschwanstein)
  "by-13": [
    {
      id: "hundepension-satke-7",
      name: "Hundepension Satke",
      city: "Kaltenberg",
      distance: 70,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Wie bei anderen Schlosswanderungen: ruhige Pension im Umkreis."
    }
  ],

  // by-14: Olympiaberg (München)
  "by-14": [
    {
      id: "hundepension-satke-8",
      name: "Hundepension Satke",
      city: "Kaltenberg / nahe München",
      distance: 50,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Gute Pension für Hunde, wenn man in München unterwegs ist."
    }
  ],

  // by-15: Staffelberg (Bad Staffelstein / Franken)
  "by-15": [
    {
      id: "hundepension-satke-9",
      name: "Hundepension Satke",
      city: "Kaltenberg",
      distance: 200,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Relativ weiter Anfahrtsweg, aber eine echte Pension für den Vierbeiner."
    }
  ],

  // by-16: Riedberger Horn (Allgäu)
  "by-16": [
    {
      id: "hundehotel-allgaeu-2",
      name: "Hundehotel Allgäu Dogs (wie oben)",
      city: "Durach, Allgäu",
      distance: 80,
      phone: "(siehe Webseite)",
      website: "https://www.hundezentrum-allgaeudogs.de/hundehotel/",
      description: "Professionell geführtes Hundehotel im Allgäu, ideal auch für Bergregionen."
    }
  ],

  // by-17: Kloster Andechs (Andechs / Ammersee-Region)
  "by-17": [
    {
      id: "hundepension-satke-10",
      name: "Hundepension Satke",
      city: "Kaltenberg",
      distance: 60,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Ruhige und sichere Pension, geeignet bei Ausflügen rund um den Ammersee / Kloster Andechs."
    }
  ],

  // by-18: Hohenschwangau Castle (Hohenschwangau / Neuschwanstein)
  "by-18": [
    {
      id: "hundepension-satke-11",
      name: "Hundepension Satke",
      city: "Kaltenberg",
      distance: 70,
      phone: "(siehe Webseite)",
      website: "https://www.hundehotel-satke.de/",
      description: "Wie bei anderen Schloss-Orten: Pension für den Hund in relativ erreichbarer Entfernung."
    }
  ],

  // by-19: Nebelhorn (Oberstdorf)
  "by-19": [
    {
      id: "hundehotel-allgaeu-3",
      name: "Hundehotel Allgäu Dogs",
      city: "Durach, Allgäu",
      distance: 35,
      phone: "(siehe Webseite)",
      website: "https://www.hundezentrum-allgaeudogs.de/hundehotel/",
      description: "Großzügige Hundepension mit Auslauf & Betreuung."
    }
  ],

  // by-20: Linderhof (Ettal / Ammergau)
  "by-20": [
    {
      id: "hundesporthotel-wolf-2",
      name: "Hundesporthotel Wolf",
      city: "Oberammergau",
      distance: 15,
      phone: "+49 8822 9233-0",
      website: "https://www.hotel-wolf.de/",
      description: "Sport- & Seminarhotel für Hunde & Menschen, ideal als Basis für Ausflüge im Ammergau."
    }
  ],


// Berlin Hundepensionen für Aussichtspunkte

  "be-1": [
    {
      id: "hundepension-pankow-weissensee",
      name: "Hundepension Berlin Weißensee",
      city: "Berlin Pankow / Weißensee",
      phone: "030/4729174",
      website: "https://www.hundepension-berlin.de/",
      description: "Familiäre Hundepension in Weißensee, ohne Zwinger, mit Garten & Auslauf."
    },
    {
      id: "hundemotel-ludwig",
      name: "Hundemotel Ludwig",
      city: "Berlin",
      phone: "(siehe Webseite)",
      website: "https://hundemotel-ludwig.de/en/",
      description: "Exklusive, individuelle Hundebetreuung im Familienstil, ohne Käfige."
    }
  ],

  "be-2": [
    {
      id: "amicanis",
      name: "AMICANIS Hundepension & Tagesstätte",
      city: "Berlin Wilmersdorf",
      phone: "030-53158292",
      website: "https://www.amicanis.de/",
      description: "Großes eingezäuntes Gelände, Urlaubsbetreuung und Tagesstätte."
    },
    {
      id: "pro-dog-kienitz",
      name: "PRO-DOG Hundeschule & Hundepension",
      city: "Groß Kienitz (bei Berlin)",
      phone: "033708-934075",
      website: "https://www.hundeschule-pro-dog.de/",
      description: "Naturnahe Pension & Tagesstätte mit großzügigen Auslauf-Flächen."
    }
  ],

  "be-3": [
    {
      id: "belloberlini",
      name: "Belloberlini Hundepension & Tagesstätte",
      city: "Berlin Schöneberg / Kreuzberg",
      phone: "030-20077360",
      website: "https://www.belloberlini.com/",
      description: "Städtische Hundepension & Tagesstätte mit flexibler Bring- und Abholzeit."
    },
    {
      id: "hundepension-pankow-weissensee-2",
      name: "Hundepension Berlin Weißensee (wie oben)",
      city: "Berlin Pankow / Weißensee",
      phone: "030/4729174",
      website: "https://www.hundepension-berlin.de/",
      description: "Günstige Hundepension mit Garten – auch für mehrere Tage möglich."
    }
  ],

  "be-4": [
    {
      id: "four-dogs-hundehotel",
      name: "Four Dogs Hundehotel",
      city: "Berlin Niederschöneweide (Treptow-Köpenick)",
      phone: "+49 30 20339482",
      website: "https://www.hundehotel.berlin/",
      description: "Rund-um-die-Uhr Betreuung, großer Auslauf, Übernachtung & Tagesbetreuung."
    },
    {
      id: "hundemotel-ludwig-2",
      name: "Hundemotel Ludwig",
      city: "Berlin",
      phone: "(siehe Webseite)",
      website: "https://hundemotel-ludwig.de/en/",
      description: "Kleine, exklusive Boarding-Option nahe Berlin – sehr persönlich & familiär."
    }
  ],

  "be-5": [
    {
      id: "amicanis-2",
      name: "AMICANIS Hundepension",
      city: "Berlin Wilmersdorf",
      phone: "030-53158292",
      website: "https://www.amicanis.de/",
      description: "Gut geeignet für Ausflüge zur Pfaueninsel, verlässliche und etablierte Pension."
    }
  ],

  "be-6": [
    {
      id: "hundepension-pankow-weissensee-3",
      name: "Hundepension Berlin Weißensee",
      city: "Berlin Pankow / Weißensee",
      phone: "030/4729174",
      website: "https://www.hundepension-berlin.de/",
      description: "Zentrale Pension, einfach erreichbar aus Mitte."
    }
  ],

  "be-7": [
    {
      id: "amicanis-3",
      name: "AMICANIS Hundepension & Tagesstätte",
      city: "Berlin Wilmersdorf / Charlottenburg",
      phone: "030-53158292",
      website: "https://www.amicanis.de/",
      description: "Große Stadtpension, geeignet wenn man Schloss Charlottenburg besucht und den Hund gut unterbringen möchte."
    }
  ],

  "be-8": [
    {
      id: "belloberlini-2",
      name: "Belloberlini Hundepension & Tagesstätte",
      city: "Berlin Schöneberg / Wedding",
      phone: "030-20077360",
      website: "https://www.belloberlini.com/",
      description: "Flexibel & zentral, gut erreichbar vom Humboldthain."
    }
  ],

  "be-9": [
    {
      id: "four-dogs-hundehotel-2",
      name: "Four Dogs Hundehotel",
      city: "Berlin Niederschöneweide (Treptow-Köpenick)",
      phone: "+49 30 20339482",
      website: "https://www.hundehotel.berlin/",
      description: "Große Pension mit 24/7 Betreuung, gut geeignet bei Ausflügen in Kreuzberg / Friedrichshain."
    }
  ],

  "be-10": [
    {
      id: "hundepension-pankow-weissensee-4",
      name: "Hundepension Berlin Weißensee",
      city: "Berlin Pankow / Weißensee",
      phone: "030/4729174",
      website: "https://www.hundepension-berlin.de/",
      description: "Weißensee-Pension, gute Option für den Tiergartenbereich."
    }
  ],

  "be-11": [
    {
      id: "four-dogs-hundehotel-3",
      name: "Four Dogs Hundehotel",
      city: "Berlin Niederschöneweide (Treptow-Köpenick)",
      phone: "+49 30 20339482",
      website: "https://www.hundehotel.berlin/",
      description: "Geeignet auch bei Ausflügen an den Müggelsee."
    }
  ],

  "be-12": [
    {
      id: "four-dogs-hundehotel-4",
      name: "Four Dogs Hundehotel",
      city: "Berlin Niederschöneweide",
      phone: "+49 30 20339482",
      website: "https://www.hundehotel.berlin/",
      description: "Große, verlässliche Hundebetreuung mit guter Erreichbarkeit nach Köpenick."
    }
  ],

  "be-13": [
    {
      id: "hundepension-pankow-weissensee-5",
      name: "Hundepension Berlin Weißensee",
      city: "Berlin Pankow / Weißensee",
      phone: "030/4729174",
      website: "https://www.hundepension-berlin.de/",
      description: "Zentrale Stadtpension, auch für Gäste beim Britzer Garten nutzbar."
    },
    {
      id: "hundemotel-ludwig-3",
      name: "Hundemotel Ludwig",
      city: "Berlin",
      phone: "(siehe Webseite)",
      website: "https://hundemotel-ludwig.de/en/",
      description: "Intime und persönliche Hundebetreuung, eine Option auch für Neukölln-Ausflüge."
    }
  ],

  "be-14": [
    {
      id: "belloberlini-3",
      name: "Belloberlini Hundepension",
      city: "Berlin Schöneberg / Tempelhof",
      phone: "030-20077360",
      website: "https://www.belloberlini.com/",
      description: "Verlässliche Pension, gut erreichbar bei einem Ausflug zum Tempelhofer Feld."
    }
  ],

  "be-15": [
    {
      id: "belloberlini-4",
      name: "Belloberlini Hundepension",
      city: "Berlin Schöneberg / Kreuzberg",
      phone: "030-20077360",
      website: "https://www.belloberlini.com/",
      description: "Nahe Kreuzberg, geeignet für Spaziergänge entlang des Landwehrkanals."
    }
  ],

  "be-16": [
    {
      id: "amicanis-4",
      name: "AMICANIS Hundepension",
      city: "Berlin Wilmersdorf",
      phone: "030-53158292",
      website: "https://www.amicanis.de/",
      description: "Städtische Pension, erreichbar auch von Spandau."
    }
  ],

  "be-17": [
    {
      id: "tierhotel-mamamo",
      name: "Tierhotel MamaMo",
      city: "Großbeeren / Nähe Berlin",
      phone: "(siehe Webseite)",
      website: "https://tierhotelmamomo.de/service-preise/",
      description: "Große, gut ausgestattete Pension etwas außerhalb Berlins, geeignet auch für Rüdersdorf-Ausflüge."
    }
  ],

  "be-18": [
    {
      id: "pro-dog-kienitz-2",
      name: "PRO-DOG Hundepension",
      city: "Groß Kienitz (bei Berlin/Potsdam)",
      phone: "033708-934075",
      website: "https://www.hundeschule-pro-dog.de/",
      description: "Pension & Tagesstätte in naturnaher Umgebung, relativ gut erreichbar von Potsdam."
    }
  ],

  "be-19": [
    {
      id: "amicanis-5",
      name: "AMICANIS Hundepension",
      city: "Berlin Wilmersdorf / nahe Tegel",
      phone: "030-53158292",
      website: "https://www.amicanis.de/",
      description: "Zentral-liegende Pension, relativ gut erreichbar von Tegel / Tegeler See."
    }
  ],

  "be-20": [
    {
      id: "four-dogs-hundehotel-5",
      name: "Four Dogs Hundehotel",
      city: "Berlin Niederschöneweide",
      phone: "+49 30 20339482",
      website: "https://www.hundehotel.berlin/",
      description: "Gut geeignet für längere Aufenthalte bei Ausflügen an den Müggelsee."
    }
  ],


// Brandenburg Hundepensionen für Aussichtspunkte
  "bb-1": [
    {
      id: "hundewelt-greuter",
      name: "Hundepension Greuter",
      city: "Rüthnick (Brandenburg)",
      phone: "-",  
      website: "https://hundeweltgreuter.de/hundepension",  
      description: "Großes naturnahes Grundstück mit Rudelhaltung und viel Auslauf."
    },
    {
      id: "hunde-gut-nexdorf",
      name: "Hunde‑Gut Nexdorf",
      city: "Nexdorf (Brandenburg)",
      phone: "035327 / 183 095",  
      website: "https://hunde-gut.de/",  
      description: "Pension + Tagesstätte, 24/7 Betreuung, Powerwiese, Obstgarten."
    }
  ],

  "bb-2": [
    {
      id: "hundepension-wolziger-see",
      name: "Hundepension am Wolziger See",
      city: "Blossin / Heidesee (Brandenburg)",
      phone: "033767‑81350",  
      website: "https://www.hundepension-am-wolziger-see.de",  
      description: "Familiäre Pension ohne Zwingerhaltung, max. 5 Hunde gleichzeitig."
    }
  ],

  "bb-3": [
    {
      id: "pro-dog-kienitz",
      name: "PRO‑DOG Hundeschule & Hundepension",
      city: "Groß Kienitz (bei Berlin / Brandenburg)",
      phone: "033708‑934075",  
      website: "https://www.hundeschule-pro-dog.de/",  
      description: "Naturnahe Pension & Tagesstätte mit großzügigen Auslauf‑Flächen."
    }
  ],

  "bb-4": [
    {
      id: "hundehaus-buhrtz",
      name: "Hundehaus Buhrtz",
      city: "Brandenburg (Buhrtz)",  
      phone: "-",  
      website: "https://www.hundehaus-buhrtz.de/",  
      description: "Pension mit Tages‑ & Nachtbetreuung, Bring‑/Holservice."
    }
  ],

  "bb-5": [
    {
      id: "hunde-gut-nexdorf-2",
      name: "Hunde‑Gut Nexdorf",
      city: "Nexdorf (Brandenburg)",  
      phone: "035327 / 183 095",  
      website: "https://hunde-gut.de/",  
      description: "Gleiche Pension wie bei bb‑1, sehr flexibel und naturnah."
    }
  ],

  "bb-6": [
    {
      id: "tierpension-flaeming",
      name: "Tierpension Hoher Fläming",
      city: "Klein Marzehns (Brandenburg)",
      phone: "033848‑90072",  
      website: "https://www.tierpension-flaeming.de",  
      description: "Innenzwinger, überdachter Auslauf & Freilauf – ruhige Landpension."
    }
  ],

  "bb-7": [
    {
      id: "tierhotel-mamamo",
      name: "Tierhotel MamaMo",
      city: "Großbeeren (Brandenburg)",
      phone: "(siehe Webseite)",  
      website: "https://tierhotelmamamo.de/service-preise/",  
      description: "Gute Pension vor den Toren Berlins / Brandenburgs mit naturnaher Umgebung."
    }
  ],

  "bb-8": [
    {
      id: "tierhotel-mamamo-2",
      name: "Tierhotel MamaMo",
      city: "Großbeeren (Brandenburg)",
      phone: "(siehe Webseite)",  
      website: "https://tierhotelmamamo.de/",  
      description: "Geeignet für Ausflüge zum Müggelsee – ruhige Lage, gute Betreuung."
    }
  ],

  "bb-9": [
    {
      id: "hundepension-wolziger-see-2",
      name: "Hundepension am Wolziger See",
      city: "Blossin / Heidesee (Brandenburg)",
      phone: "033767‑81350",
      website: "https://www.hundepension-am-wolziger-see.de",
      description: "Ursprüngliche Pension, auch gut für Ausflüge Richtung Tropical Islands."
    }
  ],

  "bb-10": [
    {
      id: "hundehaus-buhrtz-2",
      name: "Hundehaus Buhrtz",
      city: "Buhrtz / Brandenburg",
      phone: "-",
      website: "https://www.hundehaus-buhrtz.de/",
      description: "Nacht- & Tagesbetreuung, für den nördlichen Teil Brandenburgs nutzbar."
    }
  ],

  "bb-11": [
    {
      id: "hunde-gut-nexdorf-3",
      name: "Hunde‑Gut Nexdorf",
      city: "Nexdorf (Brandenburg)",
      phone: "035327 / 183 095",
      website: "https://hunde-gut.de/",
      description: "Sehr naturnahe Pension, gut geeignet für Ausflüge in Naturreservate wie Peitz."
    }
  ],

  "bb-12": [
    {
      id: "pro-dog-kienitz-2",
      name: "PRO-DOG Hundeschule & Pension",
      city: "Groß Kienitz (Brandenburg)",
      phone: "033708‑934075",
      website: "https://www.hundeschule-pro-dog.de/",
      description: "Pension mit Tages‑ & Übernacht‑Betreuung, erreichbar von Hohenwutzen."
    }
  ],

  "bb-13": [
    {
      id: "tierpension-flaeming-2",
      name: "Tierpension Hoher Fläming",
      city: "Klein Marzehns (Brandenburg)",
      phone: "033848‑90072",
      website: "https://www.tierpension-flaeming.de",
      description: "Landpension, guter Auslauf & naturnahe Lage, geeignet auch für Seenregionen."
    }
  ],

  "bb-14": [
    {
      id: "hundepension-wolziger-see-3",
      name: "Hundepension am Wolziger See",
      city: "Blossin / Heidesee (Brandenburg)",
      phone: "033767‑81350",
      website: "https://www.hundepension-am-wolziger-see.de",
      description: "Alles wie oben, Option für Spreewald‑Region."
    }
  ],

  "bb-15": [
    {
      id: "hundewelt-greuter-2",
      name: "Hundepension Greuter",
      city: "Rüthnick (Brandenburg)",
      phone: "-",  
      website: "https://hundeweltgreuter.de/hundepension",  
      description: "Nahegrenzige Pension, als Option für Ausflüge in die Müritz‑Grenzregion."
    }
  ],

  "bb-16": [
    {
      id: "hundehaus-buhrtz-3",
      name: "Hundehaus Buhrtz",
      city: "Brandenburg",
      phone: "-",
      website: "https://www.hundehaus-buhrtz.de/",
      description: "Große Betreuungs-Pension, auch geeignet für Ausflüge Richtung Eberswalde."
    }
  ],

  "bb-17": [
    {
      id: "tierhotel-mamamo-3",
      name: "Tierhotel MamaMo",
      city: "Großbeeren (Brandenburg)",
      phone: "(siehe Webseite)",
      website: "https://tierhotelmamamo.de/",
      description: "Gut erreichbare Pension für Ausflüge Richtung Rheinsberg."
    }
  ],

  "bb-18": [
    {
      id: "tierpension-flaeming-3",
      name: "Tierpension Hoher Fläming",
      city: "Klein Marzehns (Brandenburg)",
      phone: "033848‑90072",
      website: "https://www.tierpension-flaeming.de",
      description: "Landpension mit Ruhe & Auslauf – gut für Naturregionen wie Stechlin."
    }
  ],

  "bb-19": [
    {
      id: "hunde-gut-nexdorf-4",
      name: "Hunde‑Gut Nexdorf",
      city: "Nexdorf (Brandenburg)",
      phone: "035327 / 183 095",
      website: "https://hunde-gut.de/",
      description: "Pension mit großem Areal, Option auch für Seenregionen in Nordbrandenburg."
    }
  ],

  "bb-20": [
    {
      id: "hundewelt-greuter-2",
      name: "Hundepension Greuter",
      city: "Rüthnick (Brandenburg)",
      phone: "-",  
      website: "https://hundeweltgreuter.de/hundepension",  
      description: "Naturnahe Pension, erreichbar auch vom Havelberg (Brandenburg)."
    }
  ],
};









