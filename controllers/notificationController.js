// This controller handles sending notifications to users.
exports.sendNotification = async (req, res) => {
  const { title, message } = req.body;
  try {
    // Add your notification logic here (e.g., using Firebase Cloud Messaging)
    res.json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Notification error:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
};
