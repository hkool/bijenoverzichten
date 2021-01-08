<template>
    <div id="weer">
        <ul>
        <li>regen: {{ regen }}</li>
        <li>licht: {{ licht }}</li>
        <li>CO<sub>2</sub>: {{ co2 }}</li>
        <li>luchtdruk: {{ luchtdruk}}</li>
        <li>windsterkte: {{ windsterkte }}</li>
        <li>windrichting: {{ windrichting }}</li>
        </ul>

    </div>
</template>
<script>
export default {
    name:"Weer", 
    props: {
        "regen": Number,
        "licht": Number,
        "co2": Number,
        "luchtdruk": Number,
        "windsterkte": Number,
        "windrichting": Number
    }
}
</script>
<style scoped>
#weer{
    width:80%;
    display:-moz-grid;
    background-color: rgb(236, 222, 90);
    border-radius: 25px;
    border: rgb(231, 195, 77) solid 3px;
}
</style>