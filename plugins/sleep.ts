import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $sleep(ms: number): void
  }
}

Vue.prototype.$sleep = (ms: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(ms);
  }, ms);
})
