"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporting = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const MoviesAnalysis_1 = require("./analyzers/MoviesAnalysis");
const HTMLReport_1 = require("./reportsTargets/HTMLReport");
const ConsoleReport_1 = require("./reportsTargets/ConsoleReport");
class Reporting {
    constructor(analyzer, reportTarget) {
        this.analyzer = analyzer;
        this.reportTarget = reportTarget;
    }
    static winsAnalysisAndReport(teamName) {
        return new Reporting(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
    }
    static movieAnalysisAndReport() {
        return new Reporting(new MoviesAnalysis_1.MoviesAnalysis(), new HTMLReport_1.HTMLReport());
    }
    buildAndPrintReport(items) {
        const report = this.analyzer.run(items);
        this.reportTarget.print(report);
    }
}
exports.Reporting = Reporting;
