export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // ajuste para compensar sua navbar fixa
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
