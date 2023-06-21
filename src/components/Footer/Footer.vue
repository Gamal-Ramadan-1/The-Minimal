<template>
    <footer class="mt-4 pt-5">
        <div class="container mt-5">
            <div class="row gy-4">
                <div class="col-lg-2 col-md-12 col-sm-12">
                    <img src="@/assets/Imgs/logo.svg" alt="Logo Footer">
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email Address" onfocus="this.placeholder=''"
                            onblur="this.placeholder='Email Address'" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="mt-4">
                        <p style="color: #7d7d7d;" class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ullam expedita
                            vero atque provident amet consectetur</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 menu">
                    <h4>Menu</h4>
                    <ul>
                        <li>
                            <routerLink to="/">Home</routerLink>
                        </li>
                        <li>
                            <routerLink to="/About">About</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Portfolio">Portfolio</routerLink>
                        </li>
                        <li>
                            <routerLink to="#">Blog</routerLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 page">
                    <h4>page</h4>
                    <ul>
                        <li>
                            <routerLink to="/BolgPost">Blog Post</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Contact">Contact</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Login">Login</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Registration">Registration</routerLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 other">
                    <h4>Other</h4>
                    <ul>
                        <li>
                            <routerLink to="#">Search</routerLink>
                        </li>
                        <li>
                            <routerLink to="#">Portfolio</routerLink>
                        </li>
                        <li>
                            <routerLink to="#">About Us</routerLink>
                        </li>
                        <li>
                            <routerLink to="#">Contact Us</routerLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    <div class="copyright pb-4 pt-3">
        <div class="container mb-5">
            <div class="row gy-3">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <p>Copyright 2021 - <span> GRIDGUM </span></p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 social-media-copyright">
                    <i class="mx-lg-4 mx-3 fa-brands fa-facebook-f"></i>
                    <i class="mx-lg-4 mx-3 fa-brands fa-twitter"></i>
                    <i class="mx-lg-4 mx-3 fa-brands fa-google-plus-g"></i>
                    <i class="mx-lg-4 mx-3 fa-brands fa-pinterest"></i>
                    <i class="mx-lg-4 mx-3 fa-brands fa-dribbble"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
@import '@/Scss/Vars';

footer {
    background-color: $Footer ;

    .input-group {
        border: 1.5px solid $TextFooter;

        input {
            background-color: transparent;
            border-color: $TextFooter;
            border-right: none;
            color: $TextFooter;
            border-radius: 0px;
            padding: 10px 5px 10px 10px;
            font-size: 20px;
            letter-spacing: 3px;
        }

        input::placeholder {
            color: $TextFooter;
        }

        input:focus {
            box-shadow: none;
        }

        button {
            border-left: none;
            border-radius: 0px;

        }

        button:hover {
            background-color: transparent;
            color: $TextFooter !important;

            svg,
            i {
                color: $TextFooter !important;
            }
        }
    }

    .menu,
    .page,
    .other {
        h4 {
            color: $TextFooter;
            text-align: end;
            text-transform: capitalize;
        }

        ul {
            list-style: none;

            li {
                text-align: end;
                margin: 5px 0px;

                a {
                    color: $TextFooter;
                    text-decoration: none;
                    transition: all .3s ease-in-out;
                }

                a:hover {
                    color: white;
                    transition: all .3s ease-in-out;
                }
            }
        }
    }
}

.copyright {
    background-color: $Footer;
    color: $TextFooter !important;

    p {
        span {
            cursor: pointer;
            transition: all .3s ease-in-out;
        }

        span:hover {
            color: white !important;
            transition: all .3s ease-in-out;
        }
    }

    .social-media-copyright {

        i,
        svg {
            font-size: 25px;
            cursor: pointer;
            transition: all .3s ease-in-out;
        }

        .fa-facebook-f:hover {
            color: #3B5979;
            transition: all .3s ease-in-out;
        }

        .fa-twitter:hover {
            color: #1DA1F2;
            transition: all .3s ease-in-out;
        }

        .fa-google-plus-g:hover {
            color: #D74B39;
            transition: all .3s ease-in-out;
        }

        .fa-pinterest:hover {
            color: #A91921;
            transition: all .3s ease-in-out;
        }

        .fa-dribbble:hover {
            color: #C32361;
            transition: all .3s ease-in-out;
        }
    }
}
</style>