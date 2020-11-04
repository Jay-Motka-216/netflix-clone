export default function selectionMap({ series, films }) {
    return {
        series: [
            { 
                title: 'Documentaries', 
                Data: series.filter((item) => item.genre === 'documentaries' )
            },
            { 
                title: 'Comedies', 
                Data: series.filter((item) => item.genre === 'comedies' )
            },
            { 
                title: 'Children', 
                Data: series.filter((item) => item.genre === 'children' )
            },
            { 
                title: 'Crime', 
                Data: series.filter((item) => item.genre === 'crime' )
            },
            { 
                title: 'feel Good', 
                Data: series.filter((item) => item.genre === 'feel-good' )
            },
        ],
        films: [
            {
                title: 'Drama',
                Data: films.filter((item) => item.genre === 'drama' )
            },
            {
                title: 'Thriller',
                Data: films.filter((item) => item.genre === 'thriller' )
            },
            {
                title: 'Children',
                Data: films.filter((item) => item.genre === 'children' )
            },
            {
                title: 'Suspense',
                Data: films.filter((item) => item.genre === 'suspense' )
            },
            {
                title: 'Romance',
                Data: films.filter((item) => item.genre === 'romance' )
            },
        ]
    };
}