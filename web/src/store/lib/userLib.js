const resolveAccountId = obj => {
  const { id, account } = obj
  return {
    id,
    account
  }
}

const resolveProfile = obj => {
  const { username, avatar, school, location, sex, motto } = obj
  return {
    username,
    avatar,
    school,
    location,
    sex,
    motto
  }
}

export { resolveAccountId, resolveProfile }
