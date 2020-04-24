self.onmessage = (e) => {
  const msg = e.data
  switch (msg.type) {
    case 'filter': {
      filter(msg)
      return
    }
  }
}
const filter = (msg) => {
  const interpolationFactor = 24

  const trackedMatrix = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ]

  const world = JSON.parse(msg.world)
  // interpolate matrix
  for (let i = 0; i < 16; i++) {
    trackedMatrix[i] = (1 - interpolationFactor) * world[i] + interpolationFactor * world[i]
  }
  postMessage({ type: 'postfilter', tracked: JSON.stringify(trackedMatrix) })
}
