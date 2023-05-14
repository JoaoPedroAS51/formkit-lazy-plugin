import { reset, type FormKitNode, type FormKitPlugin } from '@formkit/core'
import { init, undefine } from '@formkit/utils'

declare module '@formkit/core' {
  interface FormKitNodeExtensions {
    props: Partial<{
      lazy: (() => Promise<object>) | Promise<object>
    }>
  }

  interface FormKitHooks {
    beforeLazy: FormKitDispatcher<Record<string, any> | false>
  }
}

/**
 * The options to be passed to {@link createLazyPlugin|createLazyPlugin}
 *
 * @public
 */
export interface LazyOptions {
  //
}

/**
 * Creates a new lazy plugin.
 *
 * @param LazyOptions - The options of {@link LazyOptions|LazyOptions} to pass to the plugin
 *
 * @returns A {@link @formkit/core#FormKitPlugin|FormKitPlugin}
 *
 * @public
 */
export function createLazyPlugin(LazyOptions?: LazyOptions): FormKitPlugin {
  const lazyPlugin = (node: FormKitNode) => {
    node.addProps(['lazy'])

    node.on('created', async () => {
      if (!undefine(node.props.lazy)) {
        return
      }

      node.config.disabled = true

      try {
        const lazy = node.props.lazy!
        const state = await (typeof lazy === 'function' ? lazy() : lazy)

        // Set `initial` state, this will be used to reset the form.
        node.props.initial = init(state)

        // Don't populate if the hook return false.
        if (node.hook.beforeLazy.dispatch(state) !== false) {
          reset(node, state)
        }

        node.emit('lazy', state)
      } catch (error) {
        node.emit('lazy:error', error)
      } finally {
        node.config.disabled = false
      }
    })

    // Default error handler
    node.on('lazy:error', ({ payload }) => {
      console.error(payload)
    })
  }

  return lazyPlugin
}
