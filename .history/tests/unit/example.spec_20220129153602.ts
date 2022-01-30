import { mount } from '@vue/test-utils';
// import App from "@/components/App2.vue";
import App from "..";

test("test App Component", function () {
  const wrapper = mount(App, {
    props: {
      msg: "World"
    }
  });
  expect(wrapper.text()).toBe('Hello')
})