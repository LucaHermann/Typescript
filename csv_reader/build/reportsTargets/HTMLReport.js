"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
const fs_1 = __importDefault(require("fs")); // Node std lib File System.
class HTMLReport {
    print(report) {
        const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>
          <p>${report}</p>
        </div>
      </div>
    `;
        fs_1.default.writeFileSync('reports.html', html);
    }
}
exports.HTMLReport = HTMLReport;
