// const DirectSalesIncentiveSchema = require("../schemas/directSalesIncentiveSchema");
const createError = require("http-errors");
const VideoSchema = require("../schemas/videoSchema");

const adminController = {
  getData: async (req, res, next) => {
    // try {
    //   const data = await DirectSalesIncentiveSchema.aggregate([
    //     { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: "$incentiveEarned" } } },
    //     { $sort: { _id: 1 } },
    //   ]);
    //   res.status(201).json({ data });
    // } catch (error) {
    //   return next(createError.InternalServerError(error));
    // }
  },
  getVideo: async (req, res, next) => {
    try {
      const videos = await VideoSchema.find();
      res.status(201).json(videos);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  postVideo: async (req, res, next) => {
    try {
      const video = req.file;
      let filePath = "";

      if (video?.filename) {
        filePath = `/${video.destination}/${video.filename}`;
      }

      const newVideo = await VideoSchema.create({
        title: req.body.title,
        video: filePath,
      });
      res.status(201).json(newVideo);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  deleteVideo: async (req, res, next) => {
    try {
      await VideoSchema.findOneAndDelete({ _id: req.body.id });
      res.status(201).json("video deleted");
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = adminController;
