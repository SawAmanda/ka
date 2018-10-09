<template>
    <div id="tmpl">
        <div id="pet_title">
            <h1>{爱宠}</h1>
        </div>
        <div id="pet_content">
            <ul>
                <li v-for="item in list">
                    <router-link v-bind="{to:'./pet/pet_content/'+item.id}">
                        <img :src="item.img" width="100" height="100">
                        <p v-text="item.name"></p>
                        <p v-text="item.species"></p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: []
        }
    },
    created(){
        this.getimgs2();
    },
    methods : {
        getimgs2(){
            var url = "../../statics/json/pet-img.json";
            console.log(url);

            this.$http.get(url).then(function(res){
                var data = res.body;
                if (data.status != 0) {
                    Toast (错误);
                    return;
                }
                this.list = data.message;
            })
        }
    }
}
</script>

<style scoped>
#pet_title {
    width: 80%;
    margin: 80px auto 0 auto;
}

#pet_title h1 {
    text-align: center;
    color: #ffc0cb;
}

#pet_content {
    width: 80%;
    margin: 0 auto;
}

#pet_content ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0;
}

#pet_content ul li {
    width: 45%;
}

#pet_content ul li a {
    display: block;
    padding: 5%;
}

#pet_content ul li a img {
    height: 332px;
}

#pet_content ul li a p {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    margin: 5%;
}

</style>
