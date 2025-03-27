// Importa dinámicamente las imagenes de la carpeta
export const imagenes = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png}')
