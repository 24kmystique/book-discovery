export function UriEncoder(text) {
  return encodeURIComponent(text.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '-'));
}

