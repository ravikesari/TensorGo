const User = require('../models/userModel');

exports.saveUser = async (req, res) => {
    const { googleId, name, email, picture } = req.body;

    try {
        let user = await User.findOne({ googleId });

        if (!user) {
            user = new User({ googleId, name, email, picture });
            await user.save();
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error saving user:', error.message);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
