export const slugGenerator = (text) => {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/, "-");
};

// Clínica médica -> clinica-medica