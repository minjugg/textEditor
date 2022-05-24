const Document = require("../models/Document");

const home = async (req, res, next) => {
  const doc = await Document.find({}).lean();

  return res.send(doc);
};

const page = async (req, res, next) => {
  const currentUserDocument = await Document.find({ uid: req.session.uid });

  return res.send(currentUserDocument);
};

const select = async (req, res, next) => {
  const selectedDocument = await Document.findOne({ _id: req.body.id });

  return res.send(selectedDocument);
};

const create = async (req, res, next) => {
  await Document.create({
    context: req.body.input,
    uid: req.session.uid,
  });
};

module.exports = { home, page, create, select };
