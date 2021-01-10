<template>
    <div  class="bannerdatum">
        Het is vandaag {{  today }}
    </div>
</template>
<script>
import mixins from '../mixins/mixins';
export default {
    name: "BannerDatum",
    mixins: [mixins],
}
</script>
<style scoped>
.bannerdatum{
    background-color: rgb(236, 222, 90);
    padding:20px;
}
</style>