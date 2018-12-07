import {
    shallowMount
} from '@vue/test-utils'
import button from '@/components/globals/_v-button.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const customLabel = 'new message'
        const wrapper = shallowMount(button, {
            propsData: {
                customLabel
            }
        })
        expect(wrapper.text()).toMatch(customLabel)
    })

    //https://vue-test-utils.vuejs.org/api/wrapper/#classes
    it('renders props.msg when passed', () => {
        const customClass = 'btn-primary'
        const wrapper = shallowMount(button, {
            propsData: {
                customClass
            }
        })
        expect(wrapper.classes().join(' ')).toEqual('btn btn-primary')
    })
})