// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
import { mount } from '@vue/test-utils';
import App from "./sr"

test("test App Component", function () {
  const wrapper = mount(App);
  expect(wrapper.text()).toBe('a')
})