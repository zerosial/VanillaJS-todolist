export default function todoReRender() {
  document.dispatchEvent(new CustomEvent("reRender", {}));
}
