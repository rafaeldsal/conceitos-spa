export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(ev) {
    ev = ev || window.event;
    ev.preventDefault();

    window.history.pushState({}, "", ev.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    console.log(pathname);
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
