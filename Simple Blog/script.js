// Alamat API untuk data artikel
const API = "https://jsonplaceholder.typicode.com/posts";

// Menyimpan artikel, ID edit, dan ID artikel baru
let articles = [];
let editId = null;
let nextId = 6;

// Mengambil elemen HTML
const form = document.getElementById("articleForm");
const title = document.getElementById("title");
const body = document.getElementById("body");
const articlesBox = document.getElementById("articles");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const themeBtn = document.getElementById("themeBtn");

// Mengatur tema yang tersimpan
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️ Terang";
}

// Tombol mengganti terang/gelap
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const darkMode = document.body.classList.contains("dark");
    themeBtn.textContent = darkMode ? "☀️ Terang" : "🌙 Gelap";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
});

// Mengambil artikel dari Local Storage atau API
async function getArticles() {
    try {
        const savedArticles = localStorage.getItem("my_articles");

        if (savedArticles) {
            articles = JSON.parse(savedArticles);
            const savedNextId = localStorage.getItem("nextId");
            if (savedNextId) nextId = parseInt(savedNextId, 10);
        } else {
            const response = await fetch(API);
            if (!response.ok) throw new Error("Gagal mengambil data artikel.");

            const data = await response.json();
            articles = data.slice(0, 5);
            nextId = 6;
            saveToLocalStorage();
        }

        renderArticles();
    } catch (err) {
        error.textContent = err.message;
    } finally {
        if (loading) loading.hidden = true;
    }
}

// Menyimpan artikel ke Local Storage
function saveToLocalStorage() {
    localStorage.setItem("my_articles", JSON.stringify(articles));
    localStorage.setItem("nextId", nextId.toString());
}

// Menampilkan artikel ke halaman
function renderArticles() {
    articlesBox.innerHTML = "";

    articles.forEach(article => {
        const item = document.createElement("article");
        item.className = "article";

        item.innerHTML = `
            <div class="article-id">#${article.id}</div>
            <h3>${article.title}</h3>
            <p>${article.body}</p>
            <div class="actions">
                <button class="edit" onclick="startEdit(${article.id})">Edit</button>
                <button class="delete" onclick="deleteArticle(${article.id})">Hapus</button>
            </div>
        `;

        articlesBox.appendChild(item);
    });
}

// Menangani form tambah atau edit
form.addEventListener("submit", async event => {
    event.preventDefault();

    const data = {
        title: title.value.trim(),
        body: body.value.trim()
    };

    if (!data.title || !data.body) {
        alert("Judul dan isi artikel harus diisi!");
        return;
    }

    // Jika editId ada  edit,tambah
    if (editId) {
        await editArticle(editId, data);
    } else {
        await addArticle(data);
    }
});

// Menambahkan artikel baru menggunakan POST
async function addArticle(data) {
    try {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: 1
            })
        });

        articles.push({
            id: nextId++,
            title: data.title,
            body: data.body
        });

        saveToLocalStorage();
        renderArticles();
        form.reset();
    } catch (err) {
        error.textContent = err.message;
    }
}

// Memilih artikel yang akan diedit
function startEdit(id) {
    const article = articles.find(article => article.id === id);
    if (!article) return;

    editId = id;
    title.value = article.title;
    body.value = article.body;

    formTitle.textContent = "Edit Artikel";
    submitBtn.textContent = "Simpan Perubahan";
    cancelBtn.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mengedit artikel menggunakan PUT
async function editArticle(id, data) {
    try {
        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id,
                title: data.title,
                body: data.body,
                userId: 1
            })
        });

        const index = articles.findIndex(article => article.id === id);

        if (index !== -1) {
            articles[index] = { id, ...data };
        }

        saveToLocalStorage();
        renderArticles();
        resetForm();
    } catch (err) {
        error.textContent = err.message;
    }
}

// Menghapus artikel menggunakan DELETE
async function deleteArticle(id) {
    const article = articles.find(article => article.id === id);
    if (!article) return;

    if (!confirm("Apakah kamu yakin ingin menghapus artikel ini?")) return;

    try {
        await fetch(`${API}/${id}`, { method: "DELETE" });

        articles = articles.filter(article => article.id !== id);
        saveToLocalStorage();
        renderArticles();
    } catch (err) {
        error.textContent = err.message;
    }
}

// Tombol Batal untuk membatalkan edit
cancelBtn.addEventListener("click", resetForm);

// Mengembalikan form ke kondisi awal
function resetForm() {
    editId = null;
    form.reset();
    formTitle.textContent = "Tambah Artikel";
    submitBtn.textContent = "Tambah Artikel";
    cancelBtn.hidden = true;
}

getArticles();
