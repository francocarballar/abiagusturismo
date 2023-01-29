import { Items } from '@src/types'

function useImage (items: Items[]) {
  const data = items.map(item => item)
  const mobile = items.map(item => item.responsive[0].mobile.img)
  const tablet = items.map(item => item.responsive[1].tablet.img)
  const desktop = items.map(item => item.responsive[2].desktop.img)
  return { data, mobile, tablet, desktop }
}

export { useImage }
