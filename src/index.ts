import './styles/index.scss'
import './utils/jquery.ts'




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
  
      columns: string[] = ['Select', 'Link', 'Link2', 'Id', 'Price', 'Profit: 1.5', 'Profit: 1', 'Action1', 'Action2'];
      tableContainer: HTMLElement = document.getElementById("table");
  
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
  
      createTable(): void {
        // Usuń istniejącą tabelę
        const existingTable = this.tableContainer.querySelector("table");
        if (existingTable) {
          this.tableContainer.removeChild(existingTable);
        }
      
        // Utwórz nową tabelę
        const newTable = document.createElement("table");
        newTable.setAttribute('cellspacing', '0');
      
        // Utwórz wiersz nagłówka
        const headerRow = document.createElement("tr");
        this.columns.forEach(columnName => {
          const th = document.createElement("th");
          th.textContent = columnName;
          headerRow.appendChild(th);
        });
        newTable.appendChild(headerRow);
      
        // Utwórz przykładowe dane
        const numRows = 5;
        for (let i = 0; i < numRows; i++) {
          const row = document.createElement("tr");
          let first = true;
          this.columns.forEach(columnName => {
            // 
            if (first === true) {
              first = false;
              const td = document.createElement("td");
              // checkbox
              td.innerHTML = `
              <div class="container__element">
              <div class="container__checkbox">
                <input id="marktable${i}" type="checkbox" />
                <label for="marktable${i}"> </label>
              </div>
            </div>
            `;
              row.appendChild(td);
            } else {
              const td = document.createElement("td");
              // Tutaj możesz dostosować generowanie danych
              td.textContent = `${columnName} ${i}`;
              row.appendChild(td);
            }
          });
          newTable.appendChild(row);
        }
      
        // Dodaj nową tabelę do kontenera
        this.tableContainer.appendChild(newTable);
      }
      
  
  
      updateColumns() {
        this.columns = ['Mark', 'Link', 'Link2', 'Id', 'Price', 'Profit: 1.5', 'Profit: 1', 'Action1'];
      }
    }
  
    const table = Table.instance;
  
    // Usuń istniejącą tabelę i stwórz nową tabelę z kolumnami i danymi
    table.createTable();
  });
  