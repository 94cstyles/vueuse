import { h, ref, defineComponent, reactive } from 'vue-demi'
import type { MousePressedOptions } from '@vueuse/core'
import { useMousePressed } from '@vueuse/core'
import type { RenderableComponent } from '../types'

export const UseMousePressed = defineComponent<Omit<MousePressedOptions, 'target'> & RenderableComponent>({
  name: 'UseMousePressed',
  props: ['touch', 'initialValue', 'as'] as unknown as undefined,
  setup(props, { slots }) {
    const target = ref()
    const data = reactive(useMousePressed({ ...props, target }))

    return () => {
      if (slots.default)
        return h(props.as || 'div', { ref: target }, slots.default(data))
    }
  },
})
