module.exports.hello = (event, context, cb) => {
  const response = {
    statusCode: 200,
    'headers': {
      'custom-header': 'Custom header value'
    },
    body: JSON.stringify({
      message: 'huynhdn da code cai nay'
    });
  }

  cb(null, response);
}
