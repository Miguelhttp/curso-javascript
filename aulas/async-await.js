const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("error in login"));
    }

    console.log("user logged!");
    resolve({ email })
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos")
      resolve(["videos 1", "videos 2", "videos 3"])
    }, 2000)
  })
}

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideoDetails")
      resolve({ title: "video title" });
    }, 2500)
  })
}

const displayUser = async () => {
  try {
    const user = await loginUser("adm@gmai.com", "123456")
    const videos = await getUserVideos(user.email)
    const videoDetails = await getVideoDetails(videos)

    console.log({ user });
    console.log({ videos });
    console.log({ videoDetails });
  } catch (error) {
    console.log({ error })
  }
};

// displayUser();