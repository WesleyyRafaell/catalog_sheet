/* eslint-disable no-unused-vars */
enum DocumentType {
  Monograph = 'Monografia (Graduação)',
  TCC = 'TCC',
  Book = 'Livro',
}

export function getDocumentType (type: string): DocumentType | undefined {
  switch (type.toLowerCase()) {
    case 'monografia':
      return DocumentType.Monograph;
    case 'tcc':
      return DocumentType.TCC;
    case 'livro':
      return DocumentType.Book;
    default:
      return undefined;
  }
}
