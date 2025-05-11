## 📘 How to Add a New Blog Post to `blogs.json`

### 🗂️ Step 1: Create the Markdown Content File

1. Go to your `blogs/` folder.
2. Create a new Markdown file. The filename should be the **same as the `slugUrl`**.

> ✅ **Example:**

```bash
/blogs/from-cpp-errors-to-linux-terminals-the-road-that-taught-me-to-build.md
```

3. Paste your blog content into the `.md` file using standard Markdown syntax:

```md
# From C++ Errors to Linux Terminals

It all started with red error messages and terminal rage...

---

## Lessons Learned

- Debugging makes you smarter.
- Linux is power.
```

---

### 🧩 Step 2: Add Metadata to `blogs.json`

Open `blogs.json` and add your blog post like this:

```json
{
  "from-cpp-errors-to-linux-terminals-the-road-that-taught-me-to-build": {
    "id": 1,
    "title": "From C++ Errors to Linux Terminals: The Road That Taught Me to Build",
    "description": "A personal journey through debugging C++ nightmares, learning Linux terminal, and growing into a full-stack developer — a story of grit, curiosity, and building things that matter.",
    "blogContent": "/blogs/from-cpp-errors-to-linux-terminals-the-road-that-taught-me-to-build.md",
    "slugUrl": "from-cpp-errors-to-linux-terminals-the-road-that-taught-me-to-build",
    "date": "May 10, 2025",
    "tags": ["c++", "linux", "web-development", "journey", "programming"]
    // "image": "/blogs/linux-journey.jpg" ← optional, add if needed
  }
}
```

> 💡 **Note**: The top-level key must match the `slugUrl` exactly.

---

### 🖼️ Optional: Add an Image

If your blog post has a banner/thumbnail:

* Add the `"image"` field to the JSON:

```json
"image": "/blogs/linux-journey.jpg"
```

* Make sure the image exists in your `public/blogs/` directory.

If there's no image? Just leave the field out. The UI will adapt automatically.

---

### ✅ Done!

Your blog is now live in the system. It will:

* Show up in the blog list (`BlogSection.tsx`)
* Link to the correct `.md` content via the `slugUrl`
* Optionally show a thumbnail if `image` is provided

