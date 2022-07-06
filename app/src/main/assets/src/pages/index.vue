<template>
  <div class="p-5">
    <div v-for="(_, n) in Array(30)">
      <p class="uppercase font-bold text-sm">Juz {{ n + 1 }}</p>
      <div v-for="(_, b) in Array(4)">
        <label>
          <input type="checkbox" name="" id="" />
          {{ b + 1 }}
        </label>
      </div>
    </div>
  </div>
</template>
