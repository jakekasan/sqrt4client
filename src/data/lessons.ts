const lessons = [{
    "id":1,
    "course_id":1,
    "title":"Začni tisknout",
    "desc":"Naučíš se upravit model a vytisknout ho na Original Prusa i3 MK3. Seznámíš se s programem Slic3r, ve kterém snadno připravíš model k tisku. Kroky 5, 6 a 7 ukazují, jak připravit tiskárnu k tisku a jsou důležité, při obsluze tiskárny bez asistence.",
    "author":"Dominik Schreier",
    "partner":{
        "name":"Prusa",
        "logo_url":"prusaresearch_logo.png",
        "url":"https://www.prusa3d.com"
    },
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[
        {
             "id":1,
             "title":"Software pro tiskárny Prusa",
             "submodules":[
                {
                     "title":"Original Prusa i3 MK3",
                     "text":[
                        "Stáhni <a target='_blank' href='https://www.prusa3d.cz/ovladace/#_ga=2.127256458.688405275.1549885017-770213828.1535103095'>DRIVERS & APPS</a> pro svůj OS.",
                        "Nainstaluj stažený software.",
                        "Tryska 0.4 mm je standard."
                    ],
                    "pictureURL":"1.png"
                }
            ],
            "minutes":6
        },
        {
            "id":2,
            "title":"Stažení modelu",
            "submodules":[
                {
                     "title":"Thingiverse",
                     "text":[
                        "Na <a target='_blank' href='https://www.thingiverse.com/'>Thingiverse</a> vyhledej plochý model malých rozměrů.",
                        "Např. keychain, nebo ring."
                    ],
                    "pictureURL":"2.1.png"
                },
                {
                     "title":"Dekomprimace",
                     "text":[
                        "Stáhni a rozbal soubor zip.",
                        "V rozbalené složce najdi model ve formátu .stl, nebo .obj.",
                        "Pokud nemáš program na rozbalení zip, nainstaluj:",
                        "<a target='_blank' href='https://www.win-rar.com/start.html?&L=17'>WinRAR pro Windows</a>",
                        "<a target='_blank' href='https://itunes.apple.com/cz/app/the-unarchiver/id425424353?mt=12/'>The Unarchiver pro Mac</a> "
                    ],
                    "pictureURL":"2.2.png"
                },
                {
                     "title":"Slic3r",
                     "text":[
                        "Přetáhni model.stl, nebo model.obj do programu Slic3r.",
                        "<a href='#1'>Slic3r je součástí instalačního balíčku DRIVERS & APPS</a>"
                    ],
                    "pictureURL":"2.3.png"
                }
            ],
            "minutes":4
        },
        {
            "id":3,
            "title":"Slic3r + plochý model",
            "submodules":[
                {
                     "title":"Parametry tisku",
                     "text":[
                         "Výška vrstvy 0.15mm OPTIMAL, nebo 0.20mm FAST",
                         "Tisk z materiálu PLA (Vyber materiál z kterého budeš tisknout.)",
                         "Tiskárna Original Prusa i3 MK3",
                         "Plochý objekt nevyžaduje podpory a límec."
             ],
                    "pictureURL":"3.1.png"
                },
                {
                     "title":"Ovládání Slic3ru",
                     "text":[
                         "Kolečkem myši přiblížíš a oddálíš model.",
                         "Úhlel pohledu změníš držením levého tlačítka myši a tažením.",
                         "Kliknutím na Slicovat se vytvoří kód trajektorie trysky. Zobrazuje se v Náhledu.",
                         "Nabídka úprav se objeví po kliknutí pravého tlačítka myši na model."
             ],
                    "pictureURL":"3.2.png"
                },
                {
                     "title":"Export modelu",
                     "text":[
                         "Stiskni: Slicovat, a pak Exportovat G-kód.",
                         "Ulož nazev_0.15mm_PLA_MK3.gcode na SD kartu.",
                         "Název souboru bez diakritiky!",
                         "Po exportu G-kódu se zobrazí informace."
             ],
                    "pictureURL":"3.3.png"
                }
            ],
            "minutes":4
        },
        {
            "id":4,
            "title":"Bezpečnost a obsluha tiskárny",
            "submodules":[
                {
                     "title":"Seznam se s bezpečnostními pokyny",
                     "text":[
                        "Stáhni si <a target='_blank' href='https://www.prusa3d.cz/ovladace/#_ga=2.194440362.688405275.1549885017-770213828.1535103095'>HANDBOOK</a>",
                        "Příručka 3D tiskaře je manuál k tiskárně Original Prusa i3 MK3."
                    ],
                    "pictureURL":"4.1.png"
                },
                {
                     "title":"Teploty a ovládání",
                     "text":[
                        "Teplota trysky až 300°C",
                        "Vyhřívaná podložka až 100°C",
                        "Ovládací tlačítko",
                        "Reset tlačítko"
                    ],
                    "pictureURL":"4.2.png"
                }
            ],
            "minutes":3
        },
        {
            "id":5,
            "title":"Zavedení filamentu a kalibrace",
            "submodules":[
                {
                     "title":"Zavedení filamentu",
                     "text":[
                        "Pro zavedení filamentu do extruderu stiskni:",
                        "Ovládací tlačítko -> Předehřev -> Materiál",
                        "Jakmile tryska dosáhne požadované teploty, zaveď zastřižený filament.",
                        "Podrobnosti v příručce 6.3.8"
                    ],
                    "pictureURL":"5.1.png"
                },
                {
                     "title":"Kalibrace v ose Z ",
                     "text":[
                        "Přepravou se může změnit geometrie tiskárny, která vede k chybám při tisku.",
                        "Řešení: Kalibrace -> Kalibrovat Z",
                        "Podrobnosti v příručce 6.3.6"
                    ],
                    "pictureURL":"5.2.png"
                }
            ],
            "minutes":2
        },
        {
            "id":6,
            "title":"Kontrola před tiskem",
            "submodules":[
                {
                     "title":"Čistota trysky",
                     "text":[
                        "Stiskni a 2s podrž Ovládací tlačítko. Otáčením tlačítka posuň extruder v ose Z nahoru.",
                        "Stiskni: Ovládací tlačítko -> Předehřev -> Materiál",
                        "Trysku očisti mosazným kartáčem nebo jiným nástrojem.",
                        "Nedotýkej se trysky, může dojít k popálení!",
                        "Podrobnosti v příručce 12.5"
                    ],
                    "pictureURL":"6.1.png"
                },
                {
                     "title":"Povrch pružného plátu",
                     "text":[
                        "Přilnavost povrchu závisí na čistotě (mastnota, zbytky filamentu, prach).",
                        "Povrch nemusíš čistit před každým tiskem, pokud se ho nedotkneš holou rukou.",
                        "Čištění: ubrousek s alkoholem, příp. prostředek na nádobí",
                        "Lepící tyčinka pro lepší přilnutí výtisku není u PLA nutná."
                    ],
                    "pictureURL":"6.2.png"
                }
            ],
            "minutes":2
        },
    {
            "id":7,
            "title":"Vyladění první vrstvy",
            "submodules":[
                {
                    "title":"Kalibrace první vrstvy z menu",
                    "text":[
                        "Umyj pružný tiskový plát prostředkem na nádobí a očisti povrch ubrouskem s alkoholem.",
                        "Stiskni: Ovládací tlačítko -> Kalibrace -> Kalibrace první vrstvy",
                        "Správná vzdálenost v ose Z může přesáhnout -1.000 mm (závisí na sestavení tiskárny).",
                        "Tryska se nesmí dotknout tiskového plátu!",
                        "Podrobnosti v příručce 6.3.9"
                    ],
                    "pictureURL":"7.1.png"                 
                },
                {
                     "title":"Doladění osy Z",
                     "text":[
                        "V průběhu tisku lze upravit výšku trysky",
                        "Stiskni: Ovládací tlačítko -> Doladění osy Z",
                        "Nastav ideální vzdálenost trysky, zastav tisk a očisti plát."
                    ],
                    "pictureURL":"7.2.png"
                },
                {
                     "title":"Problémy s přilanvostí",
                    "text":[
                        "Umyj tiskový plát prostředkem na nádobí a očisti povrch ubrouskem s alkoholem.",
                        "V průběhu tisku můžeš ladit teploty a rychlost tisku.",
                        "Např.:",
                        "Rychlost tisku: 70%",
                        "Teploty: +5 až 10°C"
                    ],
                    "pictureURL":"7.3.png"
                }
            ],
            "minutes":8
        },
        {
            "id":8,
            "title":"Tisk z SD karty",
            "submodules":[
                {
                    "title":"",
                    "text":[
                        "Zasuň SD kartu, očisti trysku a plát, (<a href='#5'>zaveď filament</a>)",
                        "Stiskni: Ovládací tlačítko -> Tisk z SD -> model_MK3.gcode",
                        "Po dokončení tisku stiskni a podrž Ovládací tlačítko a posuň extruder v ose Z nahoru.",
                        "Počkej na zchladnutí pružného tiskového plátu a odeber výtisk."
                    ],
                    "pictureURL":"8.1.png"
                }
            ],
            "minutes":1
        }
    ]
},
{
    "id":2,
    "course_id":1,
    "title":"Úvod do 3D tisku",
    "desc":"Zatim nic...",
    "author":"Dominik Schreier",
    "partner":"Prusa",
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[]
},
{
    "id":3,
    "course_id":1,
    "title":"Model a materiály",
    "desc":"Zatim nic...",
    "author":"Dominik Schreier",
    "partner":"Prusa",
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[]
},
{
    "id":4,
    "course_id":1,
    "title":"Slic3r",
    "desc":"Zatim nic...",
    "author":"Dominik Schreier",
    "partner":"Prusa",
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[]
},
{
    "id":5,
    "course_id":1,
    "title":"Tisk na Original Prusa i3 MK3",
    "desc":"Zatim nic...",
    "author":"Dominik Schreier",
    "partner":"Prusa",
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[]
},
{
    "id":6,
    "course_id":1,
    "title":"Troubleshooting",
    "desc":"Zatim nic...",
    "author":"Dominik Schreier",
    "partner":"Prusa",
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[]
},
{
    "id":7,
    "course_id":1,
    "title":"Post-processing",
    "desc":"Zatim nic...",
    "author":"Dominik Schreier",
    "partner":"Prusa",
    "difficulty":1,
    "quiz":"https://goo.gl/forms/DlBWfAx4HMqLMYOS2",
    "titlePicture":"Cover Photo.jpeg",
    "modules":[]
}
]

export { lessons };