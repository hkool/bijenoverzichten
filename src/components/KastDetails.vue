 <template>
 <div class="card">
  <h2 class="card-head"> kast nummer  {{ hive.id}}</h2>
    <div class="card-body">
      <span v-if="hive.signal==1">
        
         <button @click="onSignal(-1)" class="btn btn-danger" ><base-icon name="star" /></button>
      </span>
      
      <p>datum: {{ hive.datumtijd | timestampToDate }}
    <p v-for="(filter, index) in selectedfilters" :key="index">
      {{ filter }}:  {{ hive[filter] }}</p> 
    
    <img class="card-image-bottom " :src="getImgUrl(hive.img)"  :alt="hive.plaats"/>
    <span class="float-right">
      <button @click="onSignal(1)" class="btn btn-info" v-if="hive.signal==-1">Volgen</button>
      
    </span>
    </div>
  </div> 
</template>
<script>
import mixins from '../mixins/mixins'; 
import BaseIcon from './BaseIcon.vue';
export default 
{
  components: { BaseIcon },
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


svg.feather.feather-star.icon {
    color: red;
    fill: red;
}

</style>