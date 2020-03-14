/**
 *  Script to generate Protobuf files (*.proto) into *_pb.js and *.java files.
 *  The script also adds "eslint-disable" in the beginning of the Javascript file to be able to compile.
 *
 *  !NOTICE!: When running this script and running the app in dev mode (npm start). React will fail to compile once
 *            before successfully compiling directly after. Spitting out errors like:
 *
 *            'proto' is not defined     no-undef
 *            'COMPILED' is not defined  no-undef
 */
const fs = require('fs');
const exec = require('child_process').exec;

// TODO: Take all *.proto files, goddamn protoc won't play nice, you can't specify *.proto as input
const PROTO_PATH = './src/protobuf/';
const PROTO_FILE = 'interface.proto';

const JS_OUT_DIR = './src/protobuf/';
const JS_OUTPUT_FILE = 'interface_pb.js';
const JAVA_OUT_DIR = '../src/main/java/';

const disableEslint = '/* eslint-disable */\n';
const jsProg = `protoc --proto_path=${PROTO_PATH} ${PROTO_FILE} --js_out=import_style=commonjs,binary:${JS_OUT_DIR}`;
const javaProg = `protoc --proto_path=${PROTO_PATH} ${PROTO_FILE} --java_out=${JAVA_OUT_DIR}`;

// Generate the JS file
exec(jsProg, (error, stdout, stderr) => {
  if(error) {
    console.error(stderr)
  } else {
    console.log(`Javascript file generated successfully!`);
  }

  // https://stackoverflow.com/questions/15423774/nodejs-prepending-to-a-file
  // Prepend the file with /* eslint-disable */
  const data = fs.readFileSync(PROTO_PATH + JS_OUTPUT_FILE)
  const insert = new Buffer.from(disableEslint)
  const fd = fs.openSync(PROTO_PATH + JS_OUTPUT_FILE, 'w+')

  fs.writeSync(fd, insert, 0, insert.length, 0)
  fs.writeSync(fd, data, 0, data.length, insert.length)

  fs.close(fd, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Successfully prepended the Javascript file with eslint disable comment!');
    }
  });
});

// Generate the Java file
exec(javaProg, (error, stdout, stderr) => {
  if(error) {
    console.log(stderr);
  } else {
    console.log(`Java file generated successfully!`);
  }
});

// https://github.com/improbable-eng/grpc-web/issues/96#issuecomment-523448731
// #!/bin/bash

// for f in "${PROTO_DIR}".proto
// do
//     protoc3 \
//       --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
//       --proto_path="${PROTO_DIR}" \
//       --js_out=import_style=commonjs,binary:${OUT_DIR} \
//       --ts_out=${OUT_DIR} \
//       "${f}"
// done


// for f in "${OUT_DIR}"/*.js
// do
//     echo '/* eslint-disable ' | cat - "${f}" > temp && mv temp "${f}"
// done
