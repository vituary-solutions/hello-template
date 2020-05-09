class TeamAddress {
  constructor(remote) {
    this.street = remote.street || null
    this.city = remote.city || null
    this.region = remote.region || null
    this.country = remote.country || null
    this.postalCode = remote.postalCode || null
  }
}

export default class Team {
  constructor(remote) {
    this.name = remote.name || null;
    this.arena = remote.arena || null;
    this.address = remote.address ? new TeamAddress(remote.address) : null
  }
}
