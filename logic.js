export const totalGaji = (jamKerja, tarif) => {
    let gajiNormal = 0;
    let gajiLembur = 0;
    const jamNormal = 40;

    if (jamKerja > jamNormal) {
        gajiNormal = jamNormal * tarif;

        const jamLembur = jamKerja - jamNormal;
        gajiLembur = jamLembur * tarif * 1.5;
    } else {
        gajiNormal = jamKerja * tarif;
    }

    return  gajiNormal + gajiLembur; 
}