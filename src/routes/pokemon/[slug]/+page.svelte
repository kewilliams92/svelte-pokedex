<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    let { pokeman } = data.props;
    let { weight, name, height, id, sprites, types } = pokeman;
    if(types.length > 1) {
        types = types.map((type:string) => type.type.name).join(", ");
    } else {
        types = types[0].type.name;
    }
    //convert weight to kg
    height = (height / 10).toFixed(1);
    weight = (weight / 10).toFixed(1);
    $: console.log(pokeman);

</script>

<div class="flex flex-col items-center">
<h1 class="text-4xl text-center my-8 uppercase">{id}. {name}</h1>
<p>Type(s): <strong>{types}</strong> | Height: <strong>{height}m</strong>| Weight: <strong>{weight}kg</strong></p>
<img class="card-image" src={sprites.other['official-artwork'].front_default} alt={name} />
</div>