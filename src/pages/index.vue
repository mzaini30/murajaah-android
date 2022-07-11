<script lang="ts" setup="">
import { Ref, ref } from "vue";
import Info from "../komponen/info.vue";

const data: Ref<string[]> = ref([]);
const { parse, stringify } = JSON;
function init(): void {
  if (localStorage.data) {
    data.value = parse(localStorage.data);
  }
}
init();
function cek(x: string): void {
  if (!data.value.includes(x)) {
    data.value.push(x);
  } else {
    data.value = data.value.filter((z) => z != x);
  }
  localStorage.data = stringify(data.value);
}
</script>

<template>
  <div class="w-full top-0 sticky bg-slate-200">
    <div :style="`width: ${(data.length / 120) * 100}%`" class="bg-red-500 h-2">
      &nbsp;
    </div>
  </div>
  <Info></Info>
  <div class="p-5">
    <div v-for="(_, n) in Array(30)">
      <p class="uppercase font-bold text-sm pb-3">Juz {{ n + 1 }}</p>
      <div class="grid grid-cols-4 gap-4 mb-3">
        <label
          class="font-mono select-none w-full rounded rounded-50% text-center content-center grid cursor-pointer text-xl aspect-square text-white"
          :class="data.includes(`${n}-${b}`) ? 'bg-green-500' : 'bg-black'"
          v-for="(_, b) in Array(4)"
        >
          <input
            type="checkbox"
            class="hidden"
            @click="cek(`${n}-${b}`)"
            :checked="data.includes(`${n}-${b}`) ? true : false"
          />
          {{ b + 1 }}
        </label>
      </div>
    </div>
  </div>
</template>
