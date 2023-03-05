const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const cors = require('cors');

const app = express();

app.use(cors({
    origin:"http://localhost:1234"    
}))

app.get("/", async (req, res) => {
  res.json({ msg: "I love Ganyu" });
});

app.get("/api", async (req, res) => {
  const API_KEY = "AIzaSyC5EszJGoV5NOVEnQnqvV2CZaBU-nMNWKI";
  const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=" +
    API_KEY +
    "&regionCode="+req.query.countryId+(req.query.videoCategoryId ? "&videoCategoryId=" + req.query.videoCategoryId : "");
  try {
    let responseData = await fetch(YOUTUBE_VIDEOS_API);
    let jsonData = await responseData.json();
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/suggestions", async (req, res) => {
  const SUGGESTIONS_API =
    "https://youtube-v3-alternative.p.rapidapi.com/related?geo=US&lang=en&id="+req.query.video_id;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4c92f5f78cmshc8f7ab49ce98c00p19c8c4jsne5a30d3df20b",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };
  try {
    const responseData = await fetch(SUGGESTIONS_API, options);
    const jsonData = await responseData.json();
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.get("/video_details", async (req, res) => {
  const API_KEY = "AIzaSyC5EszJGoV5NOVEnQnqvV2CZaBU-nMNWKI";
  const VIDEO_DETAILS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id="+req.query.video_id;
  try {
    const videoInfo = await fetch(VIDEO_DETAILS_API);
    const jsonVideoInfo = await videoInfo.json();
    res.status(200).json(jsonVideoInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Internal Server Error"})
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
