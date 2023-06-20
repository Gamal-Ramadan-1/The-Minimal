<template>
    <footer class="mt-4 py-5">
        <div class="container my-5">
            <div class="row">
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
                            <routerLink to="/BolgPost">Search</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Contact">Portfolio</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Login">About Us</routerLink>
                        </li>
                        <li>
                            <routerLink to="/Registration">Contact Us</routerLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
@import '@/Scss/Vars';

footer {
    background-color: $Fooetr ;

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
</style>