'use server';

export async function extractPdfText(file: File): Promise<string> {
  const pdfParseModule = await import('pdf-parse');
  const arrayBuffer = await file.arrayBuffer();
  const data = Buffer.from(arrayBuffer);

  // Strategy 1: legacy API (`pdf(buffer)`), commonly most stable on Vercel.
  const maybeDefault = (pdfParseModule as any).default;
  if (typeof maybeDefault === 'function') {
    const result = await maybeDefault(data);
    const text = (result?.text ?? '').trim();
    if (text) return text;
  }

  // Strategy 2: v2 API (`new PDFParse({...})`).
  const PDFParseCtor = (pdfParseModule as any).PDFParse;
  if (typeof PDFParseCtor === 'function') {
    const parser = new PDFParseCtor({ data: new Uint8Array(arrayBuffer) });
    try {
      const result = await parser.getText();
      const text = (result?.text ?? '').trim();
      if (text) return text;
    } finally {
      await parser.destroy();
    }
  }

  throw new Error('Unable to extract text from PDF.');
}
