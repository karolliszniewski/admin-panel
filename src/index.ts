import './styles/index.scss'


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle: HTMLElement | null = document.getElementById("menu-toggle");
    const container: Element | null = document.querySelector(".container");
    const menu: Element | null = document.querySelector(".menu");
  
    console.log(1);
  
    if (menuToggle && container && menu) {
      menuToggle.addEventListener('click', () => {
        menu.classList.toggle("active");
        container.classList.toggle("active");
      });
    }
  
    class Table {
      private static _instance: Table | null = null;
  
      columns: string[] = ['Mark', 'Link', 'Link2', 'Id', 'Price', 'Profit: 1.5', 'Profit: 1', 'Action1', 'Action2'];
      tableContainer: HTMLElement | null = document.getElementById("table");
  
      private constructor() {
        // private constructor to prevent instantiation
      }
  
      public static get instance(): Table {
        if (!Table._instance) {
          Table._instance = new Table();
          console.log("hello");
        }
        return Table._instance;
      }
  
      createTable() {
        // ... (bez zmian)
      }
  
      updateColumns() {
        this.columns = ['Mark', 'Link', 'Link2', 'Id', 'Price', 'Profit: 1.5', 'Profit: 1', 'Action1'];
      }
    }
  
    const table = Table.instance;
  
    // Usuń istniejącą tabelę i stwórz nową tabelę z kolumnami i danymi
    table.createTable();
  });
  