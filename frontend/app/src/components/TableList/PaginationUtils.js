export const getPaginationPages = (currentPage, totalPages) => {
    let pages = [];

    // Se a página atual for 1, adiciona 1 e as duas páginas seguintes
    if (currentPage === 1) {
        pages.push(1);
        for (let i = 2; i <= Math.min(3, totalPages); i++) {
            pages.push(i);
        }
    } 
    // Se a página atual for 2, adiciona 1 e 2
    else if (currentPage === 2) {
        pages.push(1, 2);
    } 
    // Se a página atual for 3, adiciona 1, 2 e 3
    else if (currentPage === 3) {
        pages.push(1, 2, 3);
    } 
    // Se a página atual for maior ou igual a 4, adiciona as duas páginas anteriores e a atual
    else if (currentPage >= 4) {
        pages.push(currentPage - 2); // Número anterior
        pages.push(currentPage - 1); // Segundo número anterior
        pages.push(currentPage);      // Página atual
    } 

    // Adiciona as próximas duas páginas
    for (let i = currentPage + 1; i <= Math.min(currentPage + 2, totalPages); i++) {
        pages.push(i);
    }

    // Remove duplicatas e ordena as páginas
    return [...new Set(pages)];
};
