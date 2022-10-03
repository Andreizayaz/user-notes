export const getTagsList = (text: string): string[] =>
  Array.from(
    new Set(
      text
        .split(/[\s' ','\n']+/)
        .filter((item) => item.startsWith('#') && item.trim().length > 1)
        .flatMap(
          (item) => item.replace(/[\W_]+/g, '') && item.split(/[\s'','#']+/)
        )
        .filter((item) => item.trim().length)
    )
  ) || [];

export const highlightTagText = (text: string): string => {
  return text
    .split(/[\s' ','\n']+/)
    .map((item) =>
      item.startsWith('#')
        ? `<span className="highlighted">${item}</span>`
        : item
    )
    .join(' ');
};
