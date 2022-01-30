// import { shallowMount } from '@vue/test-util';
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders props.msg when passed', () => {
    const msg:any = 'new message'
    const wrapper:any = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

