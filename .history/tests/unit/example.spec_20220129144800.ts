import { shallowMount } from '@vue/test-util';
import ImgData from '@/components/HelloWorld.vue'

describe('ImgData.ts', () => {
  it('renders props.msg when passed', () => {
    const msg:any = 'new message'
    const wrapper:any = shallowMount(ImgData, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

