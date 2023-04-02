/**
 * Fonksiyon 1 - Verilen kelimeyi dizide bulma.
 * @param {Array.<string>} data - Harfleri içeren string array. Örn: ["DALN","LIMO","KASA"]
 * @param {string} word - Aranacak kelime. Örn: "DAL"
 * @returns {Array.<{i: Number, j: Number}>}  - Örn: [ {i: 0, j: 0}, {i: 0, j: 1}, {i: 0, j: 2} ]
 * @description Fonksiyondan dönen obje dizisinde konum bilgileri sıralı yer almalıdır.
 * 'i' satır numarasını, j ise sutün numarasını temsil etmektedir.
 */
function find(data, word) {
}

/**
 * Fonksiyon 2 - İstenilen kelimeyi diziye ekleme.
 * @param {Array.<string>} data - Harfleri içeren string array. Örn: ["   N","LIMO","KASA"]
 * @returns {Array.<string>}  - Örn: ["AABF","IKLM","NOPS"]
 * @description Boşluklar string içinde ' ' şeklinde bulunmaktadır.
 * Verilen örnekte ilk satırda 3 adet boşluk ve sonrasında 'N' harfi bulunmaktadır.
 * Boşluklar eşsiz harfler ile doldurulmalıdır.
 * Örnek: ["BFPN","LIMO","KASA"]
 * Sonrasında bu array alfabetik sıraya göre sıralanmalıdır ve sıralanan array döndürülmelidir.
 * Örnek: ["AABF","IKLM","NOPS"]
 */
function getNewData(data) {
}

export { find, getNewData };
