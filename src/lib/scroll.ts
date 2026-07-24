/**
 * Rola suavemente até a seção com o id informado (com ou sem "#" na frente).
 * Respeita o scroll-margin-top de cada seção, então já compensa a altura
 * do header fixo automaticamente.
 */
export function scrollToSection(id: string) {
  const targetId = id.startsWith("#") ? id.slice(1) : id;
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
}
