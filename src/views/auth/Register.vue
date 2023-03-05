<script setup>
import { reactive } from "vue";
import useLibrary from "../../provider/users";
import AuthWidget from "./AuthWidget.vue";


const { storeUsers, errors } = useLibrary();
const rForm = reactive({
    email: "",
    password: "",
});
</script>

<template>
    <AuthWidget :r-form="rForm" :is-register="true" :post-method="storeUsers" :errors="errors"></AuthWidget>
</template >


<style lang="scss" scoped></style>