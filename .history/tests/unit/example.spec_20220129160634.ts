import { mount } from '@vue/test-utils';
const App = {
  template: `
  <div>
  <h2>ようこそ</h2>
  <div>Hello</div>
  </div>
  `
}

test("test App Component", function () {
  const wrapper = mount(App);
  expect(wrapper.text()).toBe('ようこそ ')
})
// test("test App Component", function () {
//   const wrapper = mount(App, {
//     props: {
//       msg: "World"
//     }
//   });
//   expect(wrapper.text()).toBe('Hello')
// })