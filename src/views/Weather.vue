<template>
    <div class="weather">
        <h2>{{WEATHER.name}}</h2>
        <div class="weather__coord">
            <span>Координаты: </span>
            <span>{{WEATHER.coord.lat}}</span>
            <span>{{WEATHER.coord.lon}}</span>
        </div>
        <div class="weather__main">
            <span>Ощущается как: {{WEATHER.main.feels_like | filterDegees}} C°</span>
            <span>Давление: {{WEATHER.main.pressure}} Pa</span>
            <span>Температура: {{WEATHER.main.temp | filterDegees}} C°</span>
            <span>Максимальная Температура: {{WEATHER.main.temp_max | filterDegees}} C°</span>
            <span>Минимальная Температура: {{WEATHER.main.temp_min | filterDegees}} C°</span>
        </div>
        <div class="weather__wind">
            <span>Угол Ветра: {{WEATHER.wind.deg}} deg</span>
            <span>Скорость Ветра: {{WEATHER.wind.speed}} m/s</span>
        </div>
        <img class="weather__phone" src="../assets/img/phone.png" alt="phone">
        <img class="weather__umbrella" src="../assets/img/umbrella.png" alt="umbrella">
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
    filters: {
        filterDegees: function (value) {
          
            value = value - 273.15;
            return value.toFixed(2);
        }
    }
}
</script>  
<style lang="scss">
.weather{
    width: 420px;
    height: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%,-50%);
    padding: 24px;
    box-shadow: #42aaff 0px 5px 15px;
    background: #42aaff;
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
    &__phone{
        width: 150px;
        position: absolute;
        right: -76px;
        bottom: -34px;
    }
    &__umbrella{
        width: 150px;
        position: absolute;
        left: -76px;
        top: -34px;
    }
}

</style>