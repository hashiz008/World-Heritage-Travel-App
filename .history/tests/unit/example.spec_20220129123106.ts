import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/imgData'
import ImgData from '@/components/imgData'

describe('ImgData.ts', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ImgData, {
      props: { msg }
    })
    test('two + two = four', () => {
      expect(2 + 2).toBe(4)
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
