import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/imgData'
import Im from '@/components/imgData'

describe('Im.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Im, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
test('two + two = four', () => {
  expect(2 + 2).toBe(4)
})
