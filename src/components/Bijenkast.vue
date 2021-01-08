<template>
    <div class="card" v-bind:key="hive:id" v-bind:title="hive.plaats">
        <img class="card-image-top " src="/images/kempische-hive-easy.jpg" />
        <h2 classs="card-header">hive {{ numKast }}</h2>
        <div class="card-body">
        <ul>
            <li>kast: {{ numKast }}</li>
            <li>datumTijd: 1609753137</li>
            <li>plaats: Leerdam</li>

            <li>regen: 0.4</li>
            <li>licht</li>
        </ul>
        
        <weer />
        </div>
    </div>
</template>
<script>

export default {
    name: 'hive',
    props: {
        numKast: String,
        }
}
</script>
<style >

</style>