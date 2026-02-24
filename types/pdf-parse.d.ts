declare module 'pdf-parse' {
  interface PdfParseResult {
    text: string;
    [key: string]: unknown;
  }

  function pdfParse(data: Buffer | Uint8Array): Promise<PdfParseResult>;

  export = pdfParse;
}