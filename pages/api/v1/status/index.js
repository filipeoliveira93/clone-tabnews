function status(request, response) {
  response.status(200).json({
    "message": "Server is up and running! são"
  })
}
export default status

