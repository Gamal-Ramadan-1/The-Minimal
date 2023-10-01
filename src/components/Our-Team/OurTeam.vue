<template>
    <section class="our-team">
        <div class="container">
            <div class="row">
                <Header Title="our team" SubTitle="who we are"
                    Discribtion="Lorem ipsum dolor sit amet & consectetur adipisicing elit, sed do eiusmod tempor." />
            </div>
            <div class="row">
                <div class="col-12">
                    <Swiper :autoplay="{
                        delay: 5000,
                        disableOnInteraction: false,
                    }" :navigation="true" :modules="modules" :space-between="0" :breakpoints="{
    425: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2, },
    1440: { slidesPerView: 3, }
}" class="mySwiper">
                        <swiper-slide v-for="team in teams" :key="team.id">
                            <div class="card">
                                <img :src="team.url" alt="img">
                                <div class="info">
                                    <h1>{{ team.title }}</h1>
                                </div>
                            </div>
                        </swiper-slide>
                    </Swiper>
                </div>
                <div class="col-12 description-team">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi quisquam magni autem
                        assumenda, nihil laboriosam necessitatibus velit reiciendis placeat quasi soluta veritatis vitae
                        distinctio quos omnis voluptas sint illo nihil laboriosam necessitatibus velit reiciendis placeat
                        quasi soluta veritatis vitae
                        distinctio quos omnis voluptas sint illo omnis voluptas sint illo omnis voluptas sint illo.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import Header from '../Headers/HeaderInHomePage/Header.vue';
import axios from 'axios';
export default {
    name: "OurTeam",
    components: {
        Header,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Navigation],
        };
    },
    data() {
        return {
            teams: [],
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
            this.teams = response.data.slice(0, 20)
        })
    }
}
</script>
<style lang="scss" scoped>
@import '@/Scss/Vars.scss';

.our-team {
    padding: 100px 0px;

    .swiper {
        width: 100%;
        height: 450px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 250px;
            height: 350px;
            border-radius: 10px;
            transition: all .3s ease-in-out;

        }

        .card {
            border: none;
            position: relative;
            cursor: pointer;

            .info {
                position: absolute;
                bottom: 0px;
                width: 100%;
                background-color: $Orange;
                padding: 10px;

                border-radius: 4px;
                opacity: 0;
                transition: all .3s ease-in-out;

                h1 {
                    font-size: 15px;
                    width: 100%;
                    text-transform: capitalize;
                    color: rgb(252, 246, 235);
                    text-align: left;
                }
            }
        }

        .card:hover {
            img {
                z-index: 0;
                transition: all .3s ease-in-out;

            }

            .info {
                z-index: 1;
                opacity: 1;
                bottom: 40px;
                transition: all .3s ease-in-out;
            }
        }
    }

    .description-team {
        p {
            line-height: 2;
            color: $TextFooter;
        }
    }
}</style>