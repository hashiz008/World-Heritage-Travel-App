import { shallowMount } from '@vue/test-util';
import ImgData from '@/components/Hellow'

describe('ImgData.ts', () => {
  it('renders props.msg when passed', () => {
    const msg:any = 'new message'
    const wrapper:any = shallowMount(ImgData, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

