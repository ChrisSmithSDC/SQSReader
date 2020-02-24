// const SQS = require('sqs-consumer');
// const cors = require('cors');
// const express = require('express');

// const app = express();
// app.use(cors);
const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/866893681515/dev-vulcan-events',
  handleMessage: (message, done) => {
    console.log('Processing message: ', message);
    done();
  }
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();