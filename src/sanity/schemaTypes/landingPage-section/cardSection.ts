 const cardSection ={
    title: 'Card Section',
    name: 'cardSection',
    type: 'object',
    fields: [
      { title: 'Card Section Heading', name: 'cardSectionHeading', type: 'string' },
      {
        title: 'Cards',
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { title: 'Recipe Image', name: 'recipeImg', type: 'image' },
              { title: 'Recipe Title', name: 'recipeTitle', type: 'string' },
              {
                title: 'Recipe Description',
                name: 'recipeDescription',
                type: 'string',
                
              },
            ],
          },
        ],
      },
    ],
  };
  

  export default cardSection