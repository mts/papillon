export const getInfo = (text) => {
  return {
    text,
    parameters: {
      info: text,
      notes: `Must render ${text}`,
    }
  }
}
