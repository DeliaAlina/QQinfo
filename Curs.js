var app = new function() {
    this.el = document.getElementById('countries');
    this.numeCurs = ['Analiza', "Programare liniara", "Algebra"];
    this.an = [' 1', '2', '1'];
    this.semestru = ['1', '2', '1,2,3'];
    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'country';
        if (data) {
            if (data > 1) {
                name = 'cursuri';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function() {
        var data = '';
        if (this.numeCurs.length > 0) {
            for (i = 0; i < this.numeCurs.length; i++) {
                data += '<tr>';
                data += '<td>' + 'Cursul ' + this.numeCurs[i] + " in anul " + this.an[i] + " semestrul " + this.semestru[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '<td><button onclick="app.Select(' + i + ')">Selectati</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.numeCurs.length);
        return this.el.innerHTML = data;
    };
    this.Add = function() {
        el = document.getElementById('add-name');
        em = document.getElementById('add-an');
        en = document.getElementById('add-semestru');
        // Get the value

        var country = el.value;
        var country1 = em.value;
        var country2 = en.value;

        if (country) {
            // Add the new value
            this.numeCurs.push(country.trim());
            this.an.push(country1.trim());
            this.semestru.push(country2.trim());
            // Reset input value
            el.value = '';
            em.value = '';
            en.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };
    this.Edit = function(item) {
        el = document.getElementById('edit-name');
        em = document.getElementById('edit-an');
        en = document.getElementById('edit-semestru');
        // Get the value


        // Display value in the field
        el.value = this.numeCurs[item];
        em.value = this.an[item];
        en.value = this.semestru[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            // Get value
            var country = el.value;
            var country1 = em.value;
            var country2 = en.value;
            // Edit value
            self.numeCurs.splice(item, 1, country.trim());
            self.semestru.splice(item, 1, country1.trim());
            self.an.splice(item, 1, country2.trim());
            // Display the new list
            self.FetchAll();
            // Hide fields
            CloseInput();

        }
    };
    this.Delete = function(item) {
        // Delete the current row
        this.numeCurs.splice(item, 1);
        this.semestru.splice(item, 1);
        this.an.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };

    this.Select = function(item) {
        var opened = window.open("");
        opened.document.write("<!DOCTYPE html><html><head><title>Catalog Online</title><link rel='stylesheet' type='text/css' href='forms.css'></head><body><p id='counter'>" +
            (' <form action="javascript:void(0);" method="POST" onsubmit="app.Add()">') +
            ('<input type="text" id="add-name" placeholder="New nume">') +
            (' <input type="text" id="add-prenume" placeholder="New prenume">') +
            (' <input type="text" id="add-an" placeholder="New an">') +
            (' <input type="submit" value="Add"></form><div id="spoiler" role="aria-hidden">') +
            (' <form action="javascript:void(0);" method="POST" id="saveEdit"><input type="text" id="edit-name">') +
            ('  <input type="text" id="edit-semestru"></input> <input type="text" id="edit-an">') +
            (' <input type="submit" value="Edit" /> <a onclick="CloseInput()" aria-label="Close">&#10006;</a>') +
            ("</form> </div></p><br></br><p id='counter2'></p><table><tr><th>Cursurile dumneavoastra</th></tr><tbody id='catalog'></tbody>") +
            (" </table><script src='Catalog.js'></script> <script src='Curs.js'></script> <script src='Note.js'></script>") +
            "<script src='Studenti.js'></script><script src='Forms.js'></script></body></html>");
        opened.document.getElementById("counter2").innerHTML = "Catalog pentru elevii de la cursul " + this.numeCurs[item];
    }
}
app.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}