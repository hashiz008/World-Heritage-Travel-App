import { mount } from '@vue/test-utils';

// import App2 from "@/components/App2.vue";
// import App from "./src/components/App2.vue";

test("test App Component", function () {
  const wrapper = mount(App2, {
    props: {
      msg: "World"
    }
  });
  expect(wrapper.text()).toBe('Hello')
})