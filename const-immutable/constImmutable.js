
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.freeze(account);
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
