import { shallowMount } from '@vue/test-util';
// import { mount } from '@vue/test-util';

// const App:string | any = {
//   template:`<div>Hello World</div>`
// }


import ImgData from '@/components/imgData'

describe('ImgData.ts', () => {
  it('renders props.msg when passed', () => {
    const msg:any = 'new message'
    const wrapper:any = shallowMount(ImgData, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

