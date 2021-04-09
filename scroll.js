// isBottom 인지 확인

handleScroll() {
    const isBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight
    if (isBottom) {
      alert('isBottom!!!!!');
    }
  },
