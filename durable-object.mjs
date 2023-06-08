export class DurableObject {
  constructor(state) {
    this.state = state;
  }

  async alarm() {
    console.log('alarm()');

    // crashes here
    await this.state.storage.deleteAlarm();
  }

  async fetch(request) {
    console.log('fetch()');
    await this.state.storage.setAlarm(500);

    // works fine
    await this.state.storage.deleteAlarm();

    await this.state.storage.setAlarm(500);

    return new Response('Hello Miniflare!');
  }
}
