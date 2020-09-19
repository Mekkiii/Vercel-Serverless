module.exports = (req, res) => {
  const { name = 'World' } = req.query
  console.log(name + new Date());
  let json = {
    name: name,
    time: new Date(),
    code: 200,
    message: "success",
  }
  res.status(200).json(json);
}