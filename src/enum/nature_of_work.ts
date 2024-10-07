/* eslint-disable no-unused-vars */
enum DocumentType {
  Monograph = 'Monografia (Graduação)',
}

export function getDocumentType (type: string): DocumentType | undefined {
  switch (type.toLowerCase()) {
    case 'monografia':
      return DocumentType.Monograph;
    default:
      return undefined;
  }
}
