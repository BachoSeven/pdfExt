open("wza:" + location.href);
if (history.length > 1) {
  history.back();
} else {
  close();
}
