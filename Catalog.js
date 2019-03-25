var cat = new function() {
    this.el = document.getElementById('catalog');
    this.nume = ['Vlad', "Adrian", "Mihai"];
    this.prenume = ['Esteban', 'Carp', 'Ionita'];
    this.an = ['1', '2', '2'];
    this.note = ['1,2,10', '3,4,9', '5,6,9'];
    this.Count = function(data) {
        var el = document.getElementById('counter');
        var adaugare = 'nume';
        if (data) {
            if (data > 1) {
                adaugare = 'elevi';
            }
            el.innerHTML = data + ' ' + adaugare;
        } else {
            el.innerHTML = 'No ' + adaugare;
        }
    };

    this.FetchAll = function() {
        var data = '';
        if (this.nume.length > 0) {
            for (i = 0; i < this.nume.length; i++) {
                data += '<tr>';
                data += '<td>' + 'Elevul ' + this.nume[i] + " " + this.prenume[i] + " student in anul " + this.an[i] + " cu notele " + this.note[i] + '</td>';
                data += '<td><button onclick="cat.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="cat.Delete(' + i + ')">Delete</button></td>';

                data += '</tr>';
            }
        }
        this.Count(this.nume.length);
        return this.el.innerHTML = data;
    };


}
cat.FetchAll();