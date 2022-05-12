<script setup>
import Layout from "@/components/Layout.vue";
import { reactive } from "@vue/reactivity";

const loginData = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <Layout>
    <template #title> Masuk ke akun kamu</template>
    <template #subtitle>
      Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
      cita-citata sejak dalam embrio!
    </template>
    <template #form>
      <form class="flex flex-col gap-6" @submit.prevent="">
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
            v-model="loginData.email"
          />
        </div>

        <div class="flex flex-col gap-3">
          <div class="w-full flex justify-between items-center">
            <label for="password" class="font-semibold tracking-wide text-sm"
              >Kata Sandi</label
            >

            <router-link
              to="/"
              class="font-semibold tracking-wide text-sm text-primary"
              >Lupa Kata Sandi?</router-link
            >
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Kata sandi"
            class="form-control"
            v-model="loginData.password"
          />
        </div>

        <div class="flex items-center gap-3">
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            class="
              bg-gray-100
              checked:bg-gray-300
              checked:ring-2
              checked:ring-gray-300
              checked:text-gray-300
              checked:border-none
              border-none border-transparent
              hover:ring-2 hover:ring-offset-2 hover:ring-gray-200
              focus:ring-2 focus:ring-gray-200
            "
          />
          <label for="remember_me" class="font-semibold tracking-wide text-sm"
            >Ingat saya</label
          >
        </div>

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
            active:ring-2 active:ring-primary active:ring-offset-2
          "
        >
          Masuk
        </button>
      </form>
    </template>
  </Layout>
</template>

<style>
</style>