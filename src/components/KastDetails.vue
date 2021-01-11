 <template>
 <div class="card">
  <h2 class="card-head"> kast nummer  {{ hive.id}}</h2>
    <div class="card-body">
      <p>info: {{ hive.signal }} </p>
      <p>datum: {{ hive.datumtijd | timestampToDate }}
    <p v-for="(filter, index) in selectedfilters" :key="index">
      {{ filter }}:  {{ hive[filter] }}</p> 
    
    <img class="card-image-bottom " :src="getImgUrl(hive.img)"  :alt="hive.plaats"/>
    <span class="float-right">
      <button @click="onSignal(1)" class="btn btn-info" v-if="hive.signal==-1">Volgen</button>
      
       <button @click="onSignal(-1)" class="btn btn-danger" v-else>Niet meer volgen</button>
    </span>
    </div>
  </div> 
</template>
<script>
import mixins from '../mixins/mixins'; 
export default 
{
    name:'KastDetails',
    props: {
      hive: {
        type: Object,
        required: true},
      selectedfilters: {
        type: Array,
        required: true},
      
    },
    mixins: [mixins],
    methods:{
      onSignal(value){
        this.$emit('signal', value);
      }
    }
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
button{
  margin-bottom: 20px;
  border-radius:40px;
}

</style>