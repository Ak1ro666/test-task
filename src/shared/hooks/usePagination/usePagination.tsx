export const usePagination = (totalPages: number): number[] => {
    let newArray: number[] = [];
    for (let i = 0; i < totalPages; i++) {
        newArray.push(i + 1);
    }
    return newArray;
};