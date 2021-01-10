<template>
  <div class="home">
    <h3>{{ msg }}</h3>
    {{ header }}
    <!-- <p>
    Aantal bezoekers {{ bezoekers }}
    </p> -->
   <p>Selecteer een bijenkast om meer gegevens te zien</p>
  <div class="card-deck">
    <div class="card" 
    v-for="(hive, index) in hivesData.hives" 
    :key="hive.id"
    @click="selectHive(index)">
      <!-- v-on:mouseover="show(hive)"  -->
      <img class="card-image-top " src="/images/kempische-hive-easy.jpg" />
      <div class="card-text badge-danger w-100"  v-if="isClosed">
      
      <!-- v-show="isClosed" -->
        <span >Kast is gesloten</span>
      </div>
      <div class="card-body"  :id="hive.id" v-bind:title="hive.plaats"><h5 classs="card-header">bijenkast {{ hive.id }}</h5>
      {{ hive.plaats }}
      </div> 
    </div>
  </div>

  <div class="card">
  period <input type="text" v-model="period" placeholder="choose period... " /> 
  <h6>{{ period }}</h6>
  filters 
  <select class="form-control-lg"
  v-model="nwfilter"  >
    <option v-for="(filter,index) in datagroup"
    :key="index"
    :value="filter">
    {{ filter }}
    </option>
  </select>
  <!-- <input type="text" v-model="nwfilter" placeholder="add filter... " />  -->
  
  <button @click="addFilter(nwfilter)" class="btn btn-info">add filter</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="(sfilter, index) in selectedfilters" :key="index">
      {{ sfilter }} <button @click="removeFilter(sfilter)" class="btn btn-info">remove filter</button>
      </li>
    </ul>
  </div>
  
  <!-- <div class="card">
  <h2 class="card-head"> kast nummer  {{ selectedHive.id}}</h2>
    <div class="card-body"> 
      <p>datum: {{ selectedHive.datumtijd | timestampToDate }}
    <p v-for="(filter, index) in selectedfilters" :key="index">
      {{ filter }}:  {{ selectedHive[filter] }}</p> 
    
    <img class="card-image-bottom " :src="getImgUrl(selectedHive.img)"  :alt="selectedHive.plaats"/>
    </div>
  </div>  -->
  <kast-details v-if="selectedHive" :hive="selectedHive" :selectedfilters="selectedfilters" />
</div>
</template>

<script>
import hivesData from '../data/hives';
import mixins from '../mixins/mixins'; 
import KastDetails from './KastDetails.vue';
export default {
  components: { KastDetails },
  name: 'Home',
  props: {
    msg: String,
  },
  mixins: [mixins],
  data() {
    return { 
      hivesData,
      header:"Betuwse bees",
      bezoekers: 0,
      selectedHiveIndex:1,
      period:'',
      nwfilter:'',
      selectedfilters:[],
      datagroup:["regen", "licht","co2","luchtdruk","frequentie",'windsterkte',"windrichting"]
    }
  },
  computed: {
    selectedHive(){
      return this.hivesData.hives[this.selectedHiveIndex];
    },
    isClosed(){
      let isWinter = false;
      let timestamp = this.hivesData.hives[this.selectedHiveIndex].datumtijd
      let newDate = new Date(timestamp *1000)
      if (newDate.getMonth() > 8 ){
        isWinter = true;
      }
      return isWinter;
    }

  },
  methods: {
    tellen(){
      this.bezoekers++;
    },
    show(hive){
      window.alert("U klikt op kast "+ hive.id+ ". Deze kast staat in "+ hive.plaats);
    },
    selectHive(index){
      this.selectedHiveIndex = index;
    },
   addFilter(nwfilter){
     this.selectedfilters.push(nwfilter);
      let filterindex = this.datagroup.findIndex(b => b === nwfilter) ; // => 3
     this.datagroup.splice(filterindex,1);
     this.nwfilter='';
   },
   removeFilter(filter){
      this.datagroup.push(filter);
      let filterindex = this.selectedfilters.findIndex(b => b === filter) ; // => 3
     this.selectedfilters.splice(filterindex,1);
   }
  
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card{
    border:  solid 1px yellowgreen;
    overflow: hidden;
}
.card-body{
  background-color:yellowgreen  ;
}

</style>
