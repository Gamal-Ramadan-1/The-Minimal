<template>
    <div class="position-relative" style="height: 100px;">
        <nav class="navbar navbar-expand-lg py-4">
            <div class="container-fluid px-5">
                <a class="navbar-brand m-0 order-lg-1 order-2" href="#">
                    <img src="@/assets/Imgs/logo-dark.png" alt="Logo Header">
                </a>
                <div class="collapse navbar-collapse order-lg-3 order-3" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li class="me-4 nav-item text-capitalize">
                            <routerLink class="nav-link text-dark" to="/">Home</routerLink>
                        </li>
                        <li class="me-4 nav-item text-capitalize">
                            <routerLink class="nav-link text-dark" to="/About">about</routerLink>
                        </li>
                        <li class="me-4 nav-item text-capitalize">
                            <routerLink class="nav-link text-dark" to="/Portfolio">portfolio</routerLink>
                        </li>
                        <li class="me-4 nav-item dropdown text-capitalize">
                            <a class="nav-link dropdown-toto text-dark d-flex align-items-center" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                blog
                                <i class="fa-solid fa-caret-down mx-2"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <routerLink class="dropdown-item" to="/BlogLeftSideBar">blog left sidebar</routerLink>
                                </li>
                                <li>
                                    <routerLink class="dropdown-item" to="/BlogRightSideBar">blog right sidebar</routerLink>
                                </li>
                                <li>
                                    <routerLink class="dropdown-item" to="/BlogPost">blog post</routerLink>
                                </li>
                            </ul>
                        </li>
                        <li class="me-4 nav-item text-capitalize">
                            <routerLink class="nav-link text-dark" to="/Contact">contact</routerLink>
                        </li>
                        <li class="ms-4 me-1 nav-item text-uppercase" style="font-size: 14px;">
                            <routerLink class="nav-link text-dark" to="/Login"> login</routerLink>
                        </li>
                        <span> / </span>
                        <li class="nav-item text-uppercase" style="font-size: 14px;">
                            <routerLink class="nav-link text-dark" to="/Registration"> registration</routerLink>
                        </li>
                    </ul>
                </div>
                <div class="order-3 order-4">
                    <a @click="OpenSearch()" style="cursor: pointer;" class="mx-2 text-dark">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a style="cursor: pointer;" class="ms-2 text-dark" href="#menu">
                        <i class=" fa-solid fa-bars"></i>
                    </a>
                </div>
            </div>
        </nav>
        <div class="search my-3 px-3">
            <div class="position-relative">
                <input type="text" placeholder="Type & Press Enter" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Type & Press Enter'">
                <a @click="CloseSearch()">
                    <i class="fa-regular fa-circle-xmark"></i>
                </a>
            </div>
        </div>
    </div>
    <nav id="menu">
        <ul style="padding-top:10px;">
            <li class="py-3"><a href="/">Home</a></li>
            <li class="py-3"><a href="/About">About</a></li>
            <li class="py-3"><a href="/Portfolio">Portfolio</a></li>
            <li class="py-3">
                <span>Blog</span>
                <ul>
                    <li class="py-3"><a href="/BlogLeftSideBar">Blog Left SideBar</a></li>
                    <li class="py-3"><a href="/BlogRightSideBar">Blog Right SideBar</a></li>
                    <li class="py-3"><a href="/BlogPost">Blog Post</a></li>
                </ul>
            </li>
            <li class="py-3"><a href="/Contact">Contact</a></li>
        </ul>
    </nav>
</template>
<script>
import JQuery from 'jquery'
let $ = JQuery
import { onMounted } from 'vue'
export default {
    name: 'NavBar',
    setup() {
        onMounted(() => {
            $("#mm-0").css("opacity", 0)
            document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu("#menu", {
                        "offCanvas": {
                            "position": "right-front"
                        },
                        "theme": "light",
                        "counters": {
                            "add": true
                        },
                        "navbars": [
                            {
                                "position": "bottom",
                                "content": [
                                    "<a class='fa fa-envelope' href='#/'></a>",
                                    "<a class='fa fa-twitter' href='#/'></a>",
                                    "<a class='fa fa-facebook' href='#/'></a>"
                                ]
                            }
                        ]
                    });
                }
            );
        })
    },
    methods: {
        CloseSearch() {
            $(".search").css({ "opacity": 0, "z-index": 0, "transition": 'all .3s ease-in-out' })
        },
        OpenSearch() {
            $(".search").css({ "opacity": 1, "z-index": 2, "transition": 'all .3s ease-in-out' })
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/Scss/Vars.scss';

.navbar {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0px;
    left: 0px;

    .dropdown {
        .dropdown-toto:hover {

            i,
            svg {
                transform: rotate(360deg);
                transition: all .6s ease-in-out;
            }
        }
    }
}

.search {
    position: absolute;
    z-index: 0;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: white;

    input {
        width: 100%;
        position: absolute;
        border: none;
        text-align: center;
        font-size: 45px;
        color: black !important;
        z-index: 1;
    }

    input:focus-visible {
        outline: none !important;
    }

    a {
        cursor: pointer;

        i,
        svg {
            position: absolute;
            z-index: 2;
            right: 140px;
            top: 25px;
            font-size: 25px;
        }
    }
}
</style>