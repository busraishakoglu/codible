import tasksReducer, { addTask, deleteTask, toogleCompleted, setFilterStatus, setFilterText } from "../tasksSlice";

const initialTestState = {
    items: [
        { id: 1, text: "1. Görev", completed: false },
        { id: 2, text: "2. Görev", completed: true },
        { id: 3, text: "3. Görev", completed: false },
    ],
    filterText: "",
    filterStatus: "all",
};

describe("tasksSlice", () => {
    it("başlangıç state'ini döndürür", () => {
        const state = tasksReducer(undefined, { type: "@@INIT" });
        expect(state.items).toHaveLength(3);
        expect(state.items[0].text).toBe("1. Görev"); // boşluk farkı dikkat!// Başlangıç state'i ile karşılaştır
        expect(state.filterText).toBe("");
        expect(state.filterStatus).toBe("all");
    });

    it("görev ekler", () => {
        const action = addTask("Yeni Görev"); // Yeni görev ekle
        const state = tasksReducer({
            items: [],
            filterText: "",
            filterStatus: "all"
        }, action); // Başlangıç state'i boş görev listesi

        expect(state.items).toHaveLength(1); // Yeni görev eklenmiş olmalı
        expect(state.items[0].text).toBe("Yeni Görev"); // Eklenen görevin metni kontrol et
    });

    it("görev siler", () => {

        // Silinecek id tanımla
        const action = deleteTask(2);
        // Silme işlemini gerçekleştir
        const state = tasksReducer(initialTestState, action);

        // Sonucu kontrol et
        expect(state.items).toHaveLength(2); //Artık sadece 1 görev kalmış olmalı
        // Silinen görevi kontrol et
        expect(state.items[0].id).toBe(1); // İlk görev hala orada olmalı
        expect(state.items[1].id).toBe(3); // İkinci görev silinmiş olmalı
        // Silinen görevi kontrol et
        expect(state.items[0].text).toBe("1. Görev"); // İlk görev hala orada olmalı
        expect(state.items[1].text).toBe("3. Görev"); // İkinci görev silinmiş olmalı

        expect(state.items.map((t) => t.id)).toEqual([1, 3]); // ✅ Sıralı id kontrol
        expect(state.items.find((task) => task.id === 2)).toBeUndefined(); // ✅ Silinmiş mi

    });

    it("görev tamamlandı", () => {

        // Tamamlanacak görev id'sini tanımla
        const action = toogleCompleted(1);
        // Tamamlanma işlemini gerçekleştir
        const state = tasksReducer(initialTestState, action);

        // Sonucu kontrol et
        expect(state.items[0].completed).toBe(true); // İkinci görev tamamlanmış olmalı
    });

    it("filtre durumunu ayarlar", () => {
        const action = setFilterStatus("completed");
        const state = tasksReducer(initialTestState, action);

        expect(state.filterStatus).toBe("completed"); // Filtre durumu "completed" olmalı
    });

    it("filtre metnini ayarlar", () => {
        const action = setFilterText("1. Görev");
        const state = tasksReducer(initialTestState, action);

        expect(state.filterText).toBe("1. Görev"); // Filtre metni "Görev 1" olmalı
    }
    );
});