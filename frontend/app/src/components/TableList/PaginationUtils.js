export const getPaginationPages = (currentPage, totalPages) => {
    let pages = [];

    // Se a página atual for 1, 2 ou 3, adiciona as primeiras 5 páginas
    if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5);
    } 
    // Se a página atual estiver entre 4 e totalPages - 3
    else if (currentPage >= 4 && currentPage <= totalPages - 3) {
        pages.push(currentPage - 2); // Número anterior
        pages.push(currentPage - 1); // Segundo número anterior
        pages.push(currentPage);      // Página atual
        pages.push(currentPage + 1); // Próximo número
        pages.push(currentPage + 2); // Segundo próximo
    } 
    // Se a página atual estiver nas últimas 3 páginas
    else {
        const startPage = Math.max(totalPages - 4, 1); // Para garantir que a primeira página não seja menor que 1
        for (let i = startPage; i <= totalPages; i++) {
            pages.push(i);
        }
    }

    // Remove duplicatas e ordena as páginas
    return [...new Set(pages)];
};
