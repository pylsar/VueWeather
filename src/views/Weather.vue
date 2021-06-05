<template>
    <div class="weather">
        1
        <div>
            {{WEATHER.name}}
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