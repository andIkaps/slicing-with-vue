<script setup>
import Layout from "@/components/Layout.vue";
import { reactive } from "@vue/reactivity";
import linear from "@/assets/img/linear.png";
import registerImage from "@/assets/img/register.png";
const registerData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
</script>

<template>
  <Layout>
    <template #title> Bikin akun baru </template>
    <template #subtitle>
      Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
      langsung jadi deh!
    </template>
    <template #form>
      <form class="flex flex-col gap-6 lg:gap-8" @submit.prevent="">
        <div class="grid grid-cols-2 gap-3">
          <label
            for="firstName"
            class="font-semibold tracking-wide text-sm col-span-2"
            >Nama Lengkap</label
          >
          <input
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder="First name"
            class="form-control col-span-1"
            v-model="registerData.firstName"
          />
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            class="form-control col-span-1"
            v-model="registerData.lastName"
          />
        </div>
        <div class="flex flex-col gap-3">
          <label for="email" class="font-semibold tracking-wide text-sm"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abcd@example.com"
            class="form-control"
            v-model="registerData.email"
          />
        </div>

        <div class="flex flex-col gap-3">
          <label for="password" class="font-semibold tracking-wide text-sm"
            >Kata Sandi</label
          >

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Kata sandi"
            class="form-control"
            v-model="registerData.password"
          />
        </div>

        <span class="text-muted text-sm leading-6">
          Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
          Privacy Policy dari Namanyajugabelajar.io
        </span>

        <button
          class="
            bg-primary
            w-full
            text-white
            p-3
            rounded-md
            shadow-md
            hover:bg-blue-600
            transition-colors
            font-semibold
            tracking-wider
            active:ring-2 active:ring-primary/50 active:ring-offset-2
            lg:text-sm lg:p-5
          "
        >
          Mendaftar
        </button>
      </form>
    </template>

    <template #right>
      <img :src="linear" class="absolute top-0 w-full h-full z-0" alt="" />
      <img :src="registerImage" class="w-full" alt="" />
      <div class="w-[70%] mx-auto mt-10">
        <span
          class="
            text-uppercase
            font-semibold
            text-white/60 text-sm
            tracking-wider
          "
          >NAMANYAJUGABELAJAR.IO</span
        >
        <p class="text-2xl tracking-wider text-white mt-2">
          Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan
          nggak jadi beban kayak si Denis!
        </p>
      </div>
    </template>
  </Layout>
</template>

<style>
</style>