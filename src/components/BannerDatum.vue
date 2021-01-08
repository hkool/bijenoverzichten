<template>
    <div  class="bannerdatum">
        Het is vandaag {{ new Date() }}
    </div>
</template>
<script>
export default {
    name: "BannerDatum"
    
}
</script>
<style scoped>
.bannerdatum{
    background-color: rgb(236, 222, 90);
    padding:20px;
}
</style>