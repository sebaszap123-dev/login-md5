<script setup>
import { toRaw } from 'vue';

const props = defineProps(['rForm', 'postMethod', 'isRegister', 'errors'])

</script>

<template>
    <section class="h-100 gradient-form" style="background-color: #eee">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">
                                    <div class="text-center">
                                        <img src="../../assets/img/ultra_instint.png"
                                            style="width: 185px" alt="logo" />
                                        <h4 class="mt-1 mb-5 pb-1">We are The Ultra team</h4>
                                    </div>

                                    <form @submit.prevent="postMethod(toRaw(rForm))">
                                        <p>Please {{ isRegister ? 'register' : 'login' }} to your account</p>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="email">Correo electrónico</label>
                                            <input type="email" id="email" class="form-control"
                                                placeholder="pepito@gmail.com" v-model="rForm.email" />
                                        </div>
                                        <!-- {{ errors }} -->
                                        <div class="form-outline mb-4" v-if="errors.email">
                                            <input class="btn btn-danger btn-block" style="width: 100%;"
                                                :value="errors.email" />
                                        </div>


                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="password">Contraseña</label>
                                            <input type="password" id="password" class="form-control"
                                                v-model="rForm.password" />
                                        </div>

                                        <div class="form-outline mb-4" v-if="errors.password">
                                            <input class="btn btn-danger btn-block" style="width: 100%;"
                                                :value="errors.password" />
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <input class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                type="submit" :value="!isRegister ? 'Login' : 'Register'" />
                                        </div>

                                        <div class="d-flex align-items-center justify-content-center pb-4" v-if="!isRegister">
                                            <p class="mb-0 me-2">Don't have an account?</p>
                                            <button type="button" class="btn btn-outline-danger"
                                            @click="$router.push('/register')"
                                            >
                                                Create new
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <div class="text-white px-3 py-4 p-md-5 mx-md-4 justify-content-center">
                                    <h4 class="mb-4">We are more than just a company</h4>
                                    <p class="small mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                    <img src="https://images.mediotiempo.com/wO5U3MTTlWPH8MohNV3iTRGxfag=/958x596/uploads/media/2018/03/04/goku-domina-el-ultra-instinto.jpg" alt="" class="rounded img-principal">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.img-principal {
    width: 400px;
    margin-top: 12px;
}
.gradient-custom-2 {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

@media (min-width: 768px) {
    .gradient-form {
        height: 100vh !important;
    }
}

@media (min-width: 769px) {
    .gradient-custom-2 {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }
}
</style>
