import Vue from 'vue';

Vue.filter('timestampToDate', function (value) {
    if(!value) return ; 
    let timestampToSeconds = value *1000;
    let dateF = new Date(timestampToSeconds);
    return  dateF.getDate() + "-" + (dateF.getMonth()+1) + "-" + (dateF.getYear()+1900);
    }
);
