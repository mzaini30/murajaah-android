<script setup="" lang="ts">
import { Ref, ref } from "vue";

const { parse, stringify } = JSON;

const isi: Ref<any> = ref({
  judul: "",
  slug: "",
});

if (localStorage.isi) {
  isi.value = parse(localStorage.isi);
}

async function dapatkan() {
  let data = await fetch("https://android.zenia.my.id/pertama.json");
  data = await data.json();
  isi.value = data;
  localStorage.isi = stringify(data);
}
dapatkan();
</script>

<template>
  <div class="bg-black text-white p-2 truncate text-center">
    <a
      :href="`https://android.zenia.my.id/tulisan/${isi.slug}`"
      class="underline decoration-dotted text-sm"
      >{{ isi.judul }}</a
    >
  </div>
</template>
