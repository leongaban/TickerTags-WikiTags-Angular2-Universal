export function entityMeta() {
    return {
        type: 'person',
        description: 'Ryan Gosling is currently ranked 2 for the category: 2017 Oscar Nominee for Best Actor. This is an increase of 0 spots over the last 30 days. During this time period, we have seen a top rank of 1 and a dip down to the rank of 2.',
        image_credit: {
            title: 'wikimedia',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ryan_Gosling_2_Cannes_2011_%28cropped%29.jpg/1024px-Ryan_Gosling_2_Cannes_2011_%28cropped%29.jpg?width=440'
        },
        name: 'Ryan Gosling',
        also_known_as: [
            'Ryan Gosling'
        ],
        aliases: [
            'Ryan Thomas Gosling'
        ],
        occupation: 'Canadian actor',
        birth_places: [
            {
                category_id: 2001,
                place: 'Ontario'
            },
            {
                category_id: 2002,
                place: 'London, Ontario'
            }
        ],
        residences: [
            {
                category_id: 2003,
                place: 'California'
            },
            {
                category_id: 2004,
                place: 'Los Feliz, Los Angeles'
            }
        ],
        partner: {
            entity_id: 2005,
            name: 'Eva Mendez'
        }
    }
}