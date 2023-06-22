# MTG react demo

MTG card selector from scryfall api, still adding features. Still learning how to use react

## TO FIX: 
- Icon is broken
- searchParams is triggering infinite renders, i have to separate states and display a "searchResultArea" or something like that

## Proposed Work

- Implement lazy loading on card images, it looks laggy on long results
- Implement pagination for more than 50 results

- Handle 404 on api searchs
    - Catching the 404 status already, but can't do much with it
    - Can't do it properly without an spell correction function (have to do that first)

- Spell correction for known catalog cards (The API does not support this feature, will have to do it by hand)

- Isolate the "header" and "footer" components, write better logic for that. Useful, not very sexy though
- More pages
    - Sets
    - Full cardinfo (with dynamic route)

