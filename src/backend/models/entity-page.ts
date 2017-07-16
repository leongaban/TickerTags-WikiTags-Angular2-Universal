export function entityPage() {
    return {
        type: 'person',
        title: 'Ryan Gosling',
        description: 'Ryan Gosling is currently ranked 2 for the category: 2017 Oscar Nominee for Best Actor. This is an increase of 0 spots over the last 30 days. During this time period, we have seen a top rank of 1 and a dip down to the rank of 2.',
        meta: [
            {
                image_credit: {
                    title: 'wikimedia',
                    link: 'https://commons.wikimedia.org/wiki/File:Ryan_Gosling_Cannes_2014.jpg'
                },
                name: 'Ryan Gosling',
                also_known_as: [
                    'Ryan Gosling'
                ],
                aliases: 'Ryan Thomas Gosling',
                occupation: 'Canadian actor',
                birth_places: [
                    {
                        id: 2001,
                        name: 'Ontario'
                    },
                    {
                        id: 2002,
                        name: 'London, Ontario'
                    }
                ],
                residence: [
                    {
                        id: 2003,
                        name: 'California'
                    },
                    {
                        id: 2004,
                        name: 'Los Feliz, Los Angeles'
                    }
                ],
                partner: {
                    id: 2005,
                    name: 'Eva Mendez'
                }
            }
        ],
        rankings: [
            {
                id: 201,
                title: 'People from Canada'
            },
            {
                id: 202,
                title: 'Actors from Los Angeles'
            },
            {
                id: 203,
                title: 'Former Latter Day Saints'
            },
            {
                id: 204,
                title: 'Canadian people of French descent'
            },
            {
                id: 205,
                title: '1980 births'
            }
        ],
        related_tags: [
            {
                id: 2005,
                title: 'Casey Affleck'
            },
            {
                id: 2006,
                title: 'Denzel Washington'
            },
            {
                id: 2007,
                title: 'Andrew Garfield'
            },
            {
                id: 2008,
                title: 'Viggo Mortensen'
            },
            {
                id: 2009,
                title: 'Jeff Bridges'
            }
        ],
        tag_cloud: [
            {
                tag: '1994',
                weight: 0
            },
            {
                tag: 'anime',
                weight: 4
            },
            {
                tag: 'emma',
                weight: 3
            },
            {
                tag: 'german',
                weight: 0
            },
            {
                tag: 'gosling',
                weight: 9
            }
        ],
        todays_news: [
            {
                image: "https://www.bing.com/th?id=ON.1343C2BB4CD4A2F9391B1CBFC130E770&pid=News",
                title: "Harrison Ford involved in close call at John Wayne Airport; FAA investigating",
                description: "Actor and vintage plane buff Harrison Ford had a close call at the controls of a single-engine aircraft when he overflew a 737 passenger jet minutes from taking off and landed on a taxiway at John Wayne Airport in Orange County. The Federal Aviation ... Los Angeles Times"
            },
            {
                image: 'https://www.bing.com/th?id=ON.6A5928E29C46F70E4CA08ADE0A652442&pid=News',
                title: "Harrison Ford under investigation after flying his plane right over 737",
                description: "On Monday, actor Harrison Ford was flying his private plane and coming in for a landing in California. Instead of landing on a runway, he landed on a taxiway, flying right over the top of an American Airlines passenger jet. NBC's Tom Costello reports for ... MSN"
            },
            {
                image: "https://www.bing.com/th?id=ON.1343C2BB4CD4A2F9391B1CBFC130E770&pid=News",
                title: "Harrison Ford's close encounter with passenger jet",
                description: "February 15, 2017, 7:35 AM | The FAA launched an investigation after actor Harrison Ford was involved in a close call at a California airport. Ford's plane flew right over a passenger jet. More than 100 people were on board the American Airlines flight. CBS News"
            }
        ]
    }
}