import { mount } from '@vue/test-utils';
import App from '.'
// import App2 from "@/components/App2.vue";
// import App from "./src/components/App2.vue";

console.log(mount(App))

// test("test App Component", function () {
//   const wrapper = mount(App, {
//     props: {
//       msg: "World"
//     }
//   });
//   expect(wrapper.text()).toBe('Hello')
// })