module.exports = {
  async middleware(req, res) {
    console.log('Incoming request:', req.method, req.url);
    return;
  },
};