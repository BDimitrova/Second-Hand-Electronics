const Electronics = require('../models/Electronics');
const User = require('../models/User');

exports.create = (electronicsData) => Electronics.create(electronicsData);

exports.getAll = () => Electronics.find().lean();

exports.getOne = (electronicsId) => Electronics.findById(electronicsId).populate('buyingList');

exports.getMyWishBook = (userId) => Electronics.find({ buyingList: userId }).lean();

exports.update = (electronicsId, electronicsData) => Electronics.findByIdAndUpdate(electronicsId, electronicsData);

exports.delete = (electronicsId) => Electronics.findByIdAndDelete(electronicsId);

// exports.search = (toyTitle, toyCharity) => {
//     if (toyTitle) {
//         return (Electronics.find({ title: { $regex: toyTitle, $options: 'i' } }).lean());
//     }

//     if (!toyTitle && toyCharity) {
//         return (Electronics.find({ toyCharity: toyCharity }).lean());
//     }

// }