<template>
    <div class="col-lg-12">
        <h3 class="text-uppercase">{{ SubTitle }}</h3>
        <h1 class="text-uppercase">{{ Title }}</h1>
        <p>{{ Discribtion }}</p>
        <img src="@/assets/Imgs/divider.png">
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: { Title: String, SubTitle: String, Discribtion: String }
}
</script>
<style lang="scss" scoped>
h3 {
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 3px;
}

h1 {
    font-size: 50px;
    font-weight: 700;
    color: #55565b;
}

p {
    margin: 0px;
    font-size: 19px;
    font-style: italic;
    font-weight: 400;
    color: #55565b;
    text-transform: capitalize;
    font-style: italic;
}
@media screen and (max-width:426px) {
    h3{
        font-size: 25px;
    }
    h1{
        font-size: 25px;
    }
    p{
        font-size: 17px;
        padding: 0px 35px 0px 0px;
    }
    
}
@media screen and (max-width:768px) {
    h3{
        font-size: 25px;
    }
    h1{
        font-size: 35px;
    }
    p{
        font-size: 18px;
        padding: 0px 45px 0px 0px;
    }
    
}
</style>