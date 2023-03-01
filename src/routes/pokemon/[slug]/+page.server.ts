import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.slug}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    return {
        props: {
            pokeman
        }
    };
}) satisfies PageServerLoad;
