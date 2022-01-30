// import { shallowMount } from '@vue/test-util';
import { mount } from '@vue/test-util';

const App:string = {
  template:`<div>Hello World</div>`
}

test("test App Component",() => {
  const wrapper = mount(App);
  console.log(wrapper.text())
})

// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/imgData'
// import ImgData from '@/components/imgData'

// describe('ImgData.ts', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(ImgData, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

