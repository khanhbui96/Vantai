import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';
const renderToDocx = data => {
  var content = fs.readFileSync(
    path.resolve(__dirname, 'input.docx'),
    'binary'
  );

  var zip = new PizZip(content);

  var doc = new Docxtemplater();
  doc.loadZip(zip);
  doc.setData({
    ...data
  });

  try {
    doc.render();
  } catch (error) {
    var e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties
    };
    console.log(JSON.stringify({ error: e }));

    throw error;
  }

  var buf = doc.getZip().generate({ type: 'nodebuffer' });

  fs.writeFileSync(path.resolve(__dirname, `${data.time}.docx`), buf);
};
export default renderToDocx;
