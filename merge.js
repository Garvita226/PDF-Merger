const PDFMerger = require('pdf-merger-js');

const mergePdfs = async (p1, p2) => {
  const merger = new PDFMerger(); 

  await merger.add(p1);  
  await merger.add(p2);  
  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
};

module.exports = mergePdfs;