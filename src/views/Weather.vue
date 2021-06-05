<template>
    <div class="weather">
        
        <h2>{{WEATHER.name}}</h2>
        <div class="weather__coord">
            <span>{{WEATHER.coord.lat}}</span>
            <span>{{WEATHER.coord.lon}}</span>
        </div>
        <div class="weather__main">
            <span>Ощущения: {{WEATHER.main.feels_like}}</span>
            <span>Давление:{{WEATHER.main.pressure}}</span>
            <span>Температура:{{WEATHER.main.temp}}</span>
            <span>Максимальная Температура:{{WEATHER.main.temp_max}}</span>
            <span>Минимальная Температура:{{WEATHER.main.temp_min}}</span>
        </div>
        <div class="weather__wind">
            <span>Угол Ветра: {{WEATHER.wind.deg}}</span>
            <span>Скорость Ветра: {{WEATHER.wind.speed}}</span>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default{
    name: 'Weather',
    data(){
        return{
        }
    },
    computed: {
        ...mapGetters(["WEATHER"]),
        
    },
    methods:{
        ...mapActions(["GET_WEATHER_FROM_API"]),
        
    },
    mounted() {
        this.GET_WEATHER_FROM_API();
    },
}
</script>  
<style lang="scss">


</style>