const db = require("../../data/dbConfig");

module.exports = {
  get,
  getBy,
  register,
  getById,
};

function get() {
  return db("users");
}

function getBy(filter) {
  return db("users")
    .where(filter);
}

async function register(user) {
  const [id] = await db("users").insert(user, "id");
  return getById(id);
}

function getById(id) {
  return db("users as u")
    .where("u.id", id)
    .first();
}
