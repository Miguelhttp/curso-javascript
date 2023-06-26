const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("error in login"));
    }

    console.log("user logged!");
    onSucess({ email })
  }, 1500);

  console.log("after setTimeout")
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["videos 1", "videos 2", "videos 3"])
  }, 2000)
}

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "video title" });
  }, 2500)
}

const user = loginUser(
  "adm@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos })
      getVideoDetails(videos[0], (videoDetails) => {
        console.log({ videoDetails })
      })
    })
  }, (error) => {
    console.log({ error })
  });
