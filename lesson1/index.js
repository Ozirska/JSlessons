class User {
  constructor(id, name, sessionId) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
  }
  users() {
    return Object.entries(this);
  }
}
class UserRepository extends User {
  constructor(id, name, sessionId, users) {
    super(id, name, sessionId);
    this.users = super.users();
    this._users = Object.freeze(users);
  }
  getUserNames() {}
  getUserIds() {}
  getUserNameById() {}
}

// examples
const user = new User("1", "Tom", "session-id");
console.log(user);
