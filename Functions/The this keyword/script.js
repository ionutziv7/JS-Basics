const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();

function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: 'John' }, 1, 2);
playVideo.apply({ name: 'John' }, [1, 2]);
playVideo.bind({name: "John"})();

playVideo();
