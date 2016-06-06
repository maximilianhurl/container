/*eslint-disable*/
/**
 * AltNativeContainer.
 *
 * @see AltContainer
 */
import React from 'react'
import ReactNative from 'react-native'
import mixinContainer from './mixinContainer'
import assign from 'object.assign'

const AltNativeContainer = React.createClass(assign({
  displayName: 'AltNativeContainer',

  render() {
    return this.altRender(ReactNative.View)
  }
}, mixinContainer(React)))

export default AltNativeContainer
