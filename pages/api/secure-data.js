export default function handler(req, res) {
  res.status(200).json({ message: "Access granted to secure data!" });
}
