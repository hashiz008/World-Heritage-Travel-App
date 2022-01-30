import { mount } from '@vue/test-utils';
import App from "@/views";

test("test App Component",function(){
  const wrapper = mount(App,{
    props:{
      msg: "World"
    }
  });
  expect(wrapper.text()).toBe('Hello World')
})
