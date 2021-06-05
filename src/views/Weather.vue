<template>
    <div class="weather">
        <div v-for="item in WEATHER" :key="item.id" class="weather__item">
            <h2>{{item.name}}</h2>
            <div class="weather__coords">
                <span>Долгота:{{item.coord.lon}}</span>
                <span>Широта:{{item.coord.lat}}</span>
            </div>
            <div class="weather__main">
                <span>Температура:{{item.main.temp}}</span>
                <span>Давление:{{item.main.pressure}}</span>
            </div>

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
        ...mapActions(["GET_WEATHER_FROM_API"])
    },
    mounted() {
        this.GET_WEATHER_FROM_API();
    },
}
</script>  
<style lang="scss">
.weather{
    display: flex;
    flex-wrap: wrap;
    &__item{
        width: 50%;
        border: 1px solid red;
    }
}
</style>