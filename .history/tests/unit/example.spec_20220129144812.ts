import { shallowMount } from '@vue/test-util';
import HelloWorld from '@/components/HelloWorld.vue'

describe('Hello', () => {
  it('renders props.msg when passed', () => {
    const msg:any = 'new message'
    const wrapper:any = shallowMount(ImgData, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

