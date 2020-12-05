import fs from 'fs'; // Node std lib File System.
import { IReportTarget } from '../interfaces';

export class HTMLReport implements IReportTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>
          <p>${report}</p>
        </div>
      </div>
    `;

    fs.writeFileSync('reports.html', html);
  }
}