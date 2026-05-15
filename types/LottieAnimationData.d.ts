type LottieAnimationData = {
  nm?: string
  ddd?: number
  h?: number
  w?: number
  meta?: Meta
  layers?: Layer[]
  v?: string
  fr?: number
  op?: number
  ip?: number
  assets?: Asset[]
}

type Asset = {
  id?: string
  e?: number
  w?: number
  h?: number
  p?: string
  u?: string
}

type Layer = {
  ty?: number
  nm?: string
  sr?: number
  st?: number
  op?: number
  ip?: number
  ln?: string
  hasMask?: boolean
  ao?: number
  ks?: Ks
  refId?: string
  ind?: number
}

type Ks = {
  a?: A
  s?: A
  p?: A
  r?: O
  sa?: O
  o?: O
}

type A = {
  a?: number
  k?: number[]
}

type O = {
  a?: number
  k?: number
}

type Meta = {
  g?: string
}
