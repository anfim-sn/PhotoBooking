import { EffectCallback, useEffect, useState } from 'react';

export const useEffectNoFirstRender = (effect: EffectCallback, deps?: React.DependencyList) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  useEffect(() => {
    if (!isFirstRender) effect()
    setIsFirstRender(false)
  }, deps)
}