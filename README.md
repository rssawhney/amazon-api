# Amazon.in-API
Unofficial amazon.in api written in nodejs

# Usage
Make a GET request

 `localhost:8000/api?product=B002U1ZBG0`

 Response will look like

 ```json
 {
   "productTitle": "SanDisk Cruzer Blade SDCZ50-016G-135 16GB USB 2.0 Pen Drive",
   "brand": "SanDisk",
   "category": "Computers & Accessories",
   "price": "259.00",
   "maxPrice": "389.00",
   "savings": "130.00(33%)",
   "images": [
     "http://ecx.images-amazon.com/images/I/411nUnjz9eL._SS40_.jpg",
     "http://ecx.images-amazon.com/images/I/316VARbYkxL._SS40_.jpg",
     "http://ecx.images-amazon.com/images/I/41DUF9%2BTxHL._SS40_.jpg"
   ],
   "availability": "In stock.",
   "merchantInfo": "Sold by Cloudtail (4.4 out of 5 | 500,156 ratings) and Fulfilled by Amazon.Gift-wrap available.",
   "offers": "393 offers from    200.00",
   "productDescription": "Size name:16GBProduct DescriptionThe SanDisk 16GB Cruzer Blade USB Flash Drive from SanDisk is a compact, portable USB flash drive. It allows you to carry and transfer files on the go like photos, videos or music files to share with family and friends. Easily share files between computers with this convenient USB flash drive.From the ManufacturerGenerous Capacity with Compact and Upscale Design SanDisk Cruzer Blade 16GB USB 2.0 flash drive boasts a classy compact design featuring a large data storage capacity. Now you can conveniently backup, transfer, share and carry your favourite media like movies, music, video clips or pictures with you everywhere you go. The pocket-size design of the SanDisk 16GB pendrive facilitates easy and comfortable portability letting you carry your personal data with you to school or work, while its built-in SanDisk Secure Access software keeps any unauthorised access of your personal data at bay by enabling you to store your files in a password-protected folder. SanDisk Cruzer Blade is an excellent choice for users looking for a storage option to carry their important data with them even while on the move.Just Drag-and-Drop to Backup Your Data We all love to carry our stuff with us everywhere we go. From our favourite music to an important office presentation, portability of data is a necessity in today's fast-moving world. With the SanDisk Cruzer Blade Flash Drive, transferring data onto it is a breeze. The SanDisk 16GB flash drive comes with a simple Drag-and-Drop feature, which lets you drag-and-drop files into your drive conveniently after plugging it into the USB port of your laptop or desktop. After a quick, one-time driver download, you can easily store, share and transfer your personal data in a flash. Capacity: 16GB Interface: USB v2.0 Security: Password protected folder, 128-bit AES Encryption Warranty: 2 years",
   "productTechnicalDetails": "BrandSanDisk ColourRed Item Height10 Millimeters Item Width36 Millimeters Item Weight9 g Product Dimensions5.6 x 3.6 x 1 cm Item model numberSDCZ50-016G-B35 RAM Size16 GB Computer Memory TypeSDRAM Card ReaderUSB streaming Power SourceTRUE Operating SystemWindows 10, 8.1, 8, 7 and Linux Included ComponentsSanDisk 16GB Cruzer Blade USB Flash Drive"
 }
 ```

The app is live at [https://amazon-in-api.herokuapp.com/api?product=B002U1ZBG0](https://amazon-in-api.herokuapp.com/api?product=B002U1ZBG0)


# Run server
```
npm install
npm start
```
