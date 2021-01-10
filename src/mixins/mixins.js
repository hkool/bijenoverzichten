export default {
    data(){
        return{
            today:''
        }
    },
   methods: 
    {
        getImgUrl(img){
            return require('../assets/hives/'+img);
        },
        getDutchDate() {
            const o_date = new Intl.DateTimeFormat;
            const f_date = (m_ca, m_it) => Object({...m_ca, [m_it.type]: m_it.value});
            const m_date = o_date.formatToParts().reduce(f_date, {});
            this.today =  m_date.day + '-' + m_date.month + '-' + m_date.year;
        }
    },
    created(){
        this.getDutchDate();
    }
    
}