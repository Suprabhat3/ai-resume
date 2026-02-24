'use server';

export async function extractPdfText(file: File): Promise<string> {
  const pdfParseModule = (await import('pdf-parse')) as unknown as {
    default?: (data: Buffer | Uint8Array) => Promise<{ text?: string }>;
  };
  const arrayBuffer = await file.arrayBuffer();
  const data = Buffer.from(arrayBuffer);

  if (typeof pdfParseModule.default !== 'function') {
    throw new Error('pdf-parse default export not found.');
  }

  const result = await pdfParseModule.default(data);
  const text = (result?.text ?? '').trim();
  if (!text) throw new Error('Unable to extract text from PDF.');
  return text;
}
