import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => {
        setCopiedText(null);
      }, timeout);
      return true;
    } catch (err) {
      console.error('Failed to copy text:', err);
      setCopiedText(text); // Fallback state
      setTimeout(() => {
        setCopiedText(null);
      }, timeout);
      return false;
    }
  }, [timeout]);

  return { copy, copiedText, isCopied: !!copiedText };
}
