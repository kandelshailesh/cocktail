const { db } = require('../../utils/firebaseInstance');

const getCockTails = async (req, res) => {
  try {
    const result = await db.collection('cocktails').get();
    return res.status(200).json({
      data: result.size > 0 ? result.docs.map(result => result.data()) : [],
      success: true,
      message: 'Fetched successfully',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      success: false,
    });
  }
};

const addCockTail = async (req, res) => {
  try {
    console.log(req.body);
    const { item } = req.body;
    await db.collection('cocktails').doc(item.id).set(item, { merge: true });
    return res.status(200).json({
      success: true,
      message: 'Item saved successfully',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Issue while saving item',
      success: false,
    });
  }
};

module.exports = { getCockTails, addCockTail };
