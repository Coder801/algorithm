import fs from 'fs';

export default class Writer {
  constructor(filename, format = 'json', fileType = 'binary') {
    this.name = filename;
    this.format = format;
    this.fileType = fileType;
  }

  write(data) {
    fs.writeFileSync(`./source/${this.name}.${this.format}`, data, this.fileType);
  }
}
