//React
import { decorate, observable } from "mobx";
import instance from "./instance";

class MangaStore {
  mangas = [];
  loading = true;

  fetchMangas = async () => {
    try {
      const res = await instance.get("/mangas");
      this.mangas = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };

  getItemById = (mangaId) => this.mangas.find((manga) => manga.id === mangaId);
}

decorate(MangaStore, {
  mangas: observable,
  loading: observable,
});

const mangaStore = new MangaStore();
mangaStore.fetchMangas();
export default mangaStore;
