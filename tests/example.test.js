import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('vue test', async () => {
  const wrapper = mount(Example)
  expect(wrapper.vm.msg).toBe('Hello World!!')
  // wrapper.vm.msg = 'Hi DHKIM'
  await wrapper.setData({
    msg: 'Hi DHKIM'
  })
  expect(wrapper.vm.msg).toBe('Hi DHKIM')
  expect(wrapper.find('div').text()).toBe('Hi DHKIM')
})
