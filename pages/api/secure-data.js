export default function handler(req, res) {
  res.status(200).json({
    message: '✅ Protected data accessed successfully.',
  });
}
