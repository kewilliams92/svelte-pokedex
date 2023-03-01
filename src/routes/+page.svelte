<script lang='ts'>
    import { pokemon } from "../stores/pokestore";
    import PokemanCard from "../components/pokemanCard.svelte";

    let searchItem: string = "";
    let filteredPokemon: string[] = [];

    $:{
        if(searchItem){
            //search the pokemon
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchItem.toLowerCase()))
        }else {
            filteredPokemon = [...$pokemon]
        }
    }
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
    <meta name="description" content="Svelte Kit Pokedex">
</svelte:head>

<h1 class="text-2xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type='text' bind:value={searchItem} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
{#each filteredPokemon as pokeman}
<PokemanCard pokeman={pokeman} />
{/each}
</div>

<style lang="postcss">
    h1 {
        color: red;
    }
</style>