<template>
    <section class="slider">
        <div class="container h-100">
            <div class="row h-100 justifay-content-center align-items-center">
                <div class="col-lg-12 mt-5 pt-5">
                    <h3>BUSINESS, MARKETING, CONSULTING...</h3>
                    <h1 class="text-uppercase">company</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam debitis soluta! Minima qui
                        quibusdam dolorum porro. Laborum aut officiis et commodi
                        iusto! Eaque molestiae.</p>
                    <button class="text-uppercase">explore work</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Slider'
}
</script>
<style lang="scss" scoped>
@import '@/Scss/Vars';

.slider {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/Imgs/big-022.jpg");
    background-position:center;
    background-repeat: no-repeat;
    clear: both;
    background-size: cover;
    position: relative;
    z-index: 0;

    h1 {
        font-size: 185px;
        margin-top: 35px;
        color: black;
    }

    h3 {
        font-size: 40px;
        font-weight: 400;
    }

    button {
        padding: 20px 55px;
        font-weight: 600;
        border: 2px solid black;
        border-radius: 5px;
        background-color: transparent;
        margin-top: 30px;
        transition: all .2s linear;

    }

    button:hover {
        background-color: $Orange;
        border: 2px solid $Orange;
        color: white;
        transition: all .2s linear;
    }

    @media screen and (max-width: 4000px) {
        p {
            width: 45%;
        }

    }

    @media screen and (max-width: 1024px) {
        h1 {
            font-size: 130px;
        }

        h3 {
            font-size: 30px;
        }

        p {
            width: 100%;
        }

    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 100px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            width: 100%;
        }

    }

    @media screen and (max-width: 426px) {
        h1 {
            font-size: 75px;
        }

        h3 {
            font-size: 18px;
        }

        p {
            width: 100%;
        }

    }

    @media screen and (max-width: 376px) {
        h1 {
            font-size: 65px;
        }

        h3 {
            font-size: 15px;
        }

        p {
            width: 100%;
        }

    }

    @media screen and (max-width: 321px) {
        h1 {
            font-size: 55px;
        }

        h3 {
            font-size: 15px;
        }

        p {
            width: 100%;
        }

    }
}
</style>