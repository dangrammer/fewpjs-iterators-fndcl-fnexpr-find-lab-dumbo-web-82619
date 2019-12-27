const superbowlWin = (data) => {
  let result = data.find(obj => obj.result === 'W')
  return result ? result.year : undefined
}
