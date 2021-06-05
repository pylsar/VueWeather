<template>
    <div class="weather">
        <h2>{{WEATHER.name}}</h2>
        <div class="weather__coord">
            <span>Координаты:</span>
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
.weather{
    width: 420px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%,-50%);
    padding: 24px;
    box-shadow: white 0px 5px 15px;
    background: white;
    & h2{
        text-align: center;
        margin-top: 48px;
        margin-bottom: 48px;
        text-transform: uppercase;
        font-size: 48px;
    }
    & span {
        font-size: 20px;
    }

    &__main{
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        margin-bottom: 24px;
    }
    &__wind{
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        margin-bottom: 24px;
    }
}

</style>