<script setup>
import { reactive } from "vue";
import useLibrary from "../../provider/users"
import AuthWidget from "./AuthWidget.vue";

const { signinUser, errors } = useLibrary();
const sForm = reactive({
    email: "",
    password: "",
});

</script>

<template>
        <AuthWidget :r-form="sForm" :is-register="false" :post-method="signinUser" :errors="errors"></AuthWidget>
</template>