// import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils';
import App from "@/components/App2.vue"

test("test App Component", function () {
  const wrapper = mount(App);
  expect(wrapper.text()).toBe('Hello')
})