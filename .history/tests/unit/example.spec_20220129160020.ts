import { mount } from '@vue/test-utils';
const App = {
  template:`
  <div>Hello World</div>
  `
}

test("test App Component",function(){
  const wrapper = mount(App);
  expect(wrapper.text()).toBe('Hello World')
})
// test("test App Component", function () {
//   const wrapper = mount(App, {
//     props: {
//       msg: "World"
//     }
//   });
//   expect(wrapper.text()).toBe('Hello')
// })