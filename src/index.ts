// Endpoint untuk menambah produk
app.post('/products', (req: Request, res: Response) => {
    const { name, price } = req.body;
    // Logika untuk menambah produk
    res.send('Product added');
});

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: Request, res: Response) => {
    // Logika untuk mendapatkan semua produk
    res.send('List of products');
});