import { shallowMount } from '@vue/test-util';
// import { mount } from '@vue/test-util';

// const App:string | any = {
//   template:`<div>Hello World</div>`
// }

// describe('', () => {
// test("test App Component",() => {
//   const wrapper = shallowMount(App);
//   console.log(wrapper.text())
// })
// })
// // )

// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/imgData'
import ImgData from '@/components/imgData'

describe('ImgData.ts', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper:any = shallowMount(ImgData, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

