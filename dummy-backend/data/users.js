const fs = require('node:fs/promises');

async function getStoredUsers() {
  const rawFileContent = await fs.readFile('users.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedUsers = data.users ?? [];
  return storedUsers;
}

function storeUsers(users) {
  return fs.writeFile('users.json', JSON.stringify({ users: users || [] }));
}

exports.getStoredUsers = getStoredUsers;
exports.storeUsers = storeUsers; // Corrected function name
