<template>
    <div id="tmpl">
        <div class="pet_img">
            <img :src="info.img">
        </div>
        <div id="pet_text">
            <h1 v-text="info.name"></h1>
            <h2 v-text="info.species"></h2>
            <h3 v-text="info.tezheng"></h3>
            <h3 v-text="info.xingge"></h3>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: 0,
            info: {}
        }
    },
    created(){
        this.id = this.$route.params.id;

        this.getimgs2();
    },
    methods : {
        getimgs2(){
            var tid = this.$route.params.id;
            var url = "../../../statics/json/pet-img.json";
            console.log(url);

            this.$http.get(url).then(function(res){
                var data = res.body;
                if (data.status != 0) {
                    Toast (错误);
                    return;
                }
                this.info = data.message[tid-1];
            })
        }
    }
}
</script>

<style scoped>
.pet_img {
    width: 80%;
    margin: 80px auto 40px auto;
}
#pet_text h1,h2{
    text-align: center;
}
</style>
