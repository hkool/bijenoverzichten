 <template>
 <div class="card">
  <h2 class="card-head"> kast nummer  {{ hive.id}}</h2>
    <div class="card-body"> 
      <p>datum: {{ hive.datumtijd | timestampToDate }}
    <p v-for="(filter, index) in selectedfilters" :key="index">
      {{ filter }}:  {{ hive[filter] }}</p> 
    
    <img class="card-image-bottom " :src="getImgUrl(hive.img)"  :alt="hive.plaats"/>
    </div>
  </div> 
</template>
<script>
import mixins from '../mixins/mixins'; 
export default 
{
    name:'KastDetails',
    props: ['hive', 'selectedfilters'],
    mixins: [mixins]
}

</script>
<style  scoped>
.card{
    border:  solid 1px yellowgreen;
    overflow: hidden;
}
.card-body{
  background-color:yellowgreen  ;
}

</style>