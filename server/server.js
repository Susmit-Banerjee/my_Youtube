const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:1234",
  })
);

app.get("/", async (req, res) => {
  res.json({ msg: "Thank u for using my video streaming web app" });
});

app.get("/api", async (req, res) => {
  const YOUTUBE_VIDEOS_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=" +
    process.env.API_KEY +
    "&regionCode=" +
    req.query.countryId +
    (req.query.videoCategoryId
      ? "&videoCategoryId=" + req.query.videoCategoryId
      : "");
  try {
    let responseData = await fetch(YOUTUBE_VIDEOS_URL);
    let jsonData = await responseData.json();
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/autocomplete", async (req, res) => {
  try {
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + req.query.q);
    const jsonData = await data.json();
    res.status(200).json(jsonData[1]);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/suggestions", async (req, res) => {
  const SUGGESTIONS_URL = "https://youtube-v3-alternative.p.rapidapi.com/related?geo=US&lang=en&id=" + req.query.video_id;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };
  try {
    const responseData = await fetch(SUGGESTIONS_URL, options);
    const jsonData = await responseData.json();
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.get("/video_details", async (req, res) => {
  const VIDEO_DETAILS_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + process.env.API_KEY + "&id=" + req.query.video_id;
  try {
    const videoInfo = await fetch(VIDEO_DETAILS_URL);
    const jsonVideoInfo = await videoInfo.json();
    res.status(200).json(jsonVideoInfo);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/results", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    },
  };

  try {
    const data = await fetch("https://youtube-data8.p.rapidapi.com/search/?hl=en&gl=US&q=" + req.query.search_query, options);
    const jsonData = await data.json();
    res.status(200).json(jsonData.contents);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
