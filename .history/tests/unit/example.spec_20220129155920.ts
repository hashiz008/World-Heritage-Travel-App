import { mount } from '@vue/test-utils';
import App from '.App.vue'
// import App2 from "@/components/App2.vue";
// import App from "./src/components/App2.vue";

const wrapper = mount(Counter)

// wrapper.vmを 介して実際の Vue インスタンスにアクセスできます
const vm = wrapper.vm

// test("test App Component", function () {
//   const wrapper = mount(App, {
//     props: {
//       msg: "World"
//     }
//   });
//   expect(wrapper.text()).toBe('Hello')
// })