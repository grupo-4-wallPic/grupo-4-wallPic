INSERT INTO colors (id, color)
VALUES (default, Blanco),(default, Negro), (default, Madera);

INSERT INTO categories (id, name)
VALUES (default, Animales), (default, Botanica), (default, Arte),(default, Ciudades);

INSERT INTO size (id, size, price)
VALUES ( default, "15 x 20", 590), (default, "20 x 30", 990), (default, "30 x 40", 1590), (default, "40 x 55", 2290), (default , " 50 x 70",2990);

INSERT INTO users (id, name, lastName, email, password, newsletter, createdat, updatedat, deletedat)
VALUES (default, Manuel, Carossino, "manuelcarossino@me.com", manu123, 1, default, default, default);

INSERT INTO products ( id, name, description, images, categoryId)
VALUES (default, "OWL WITH LIGHT BLUE EYES", "Sumale Diseño a tu hogar con nuestro cuadros pensados para cada rincón de tu casa. Nuestros productos se entregan listos para colgar. Incluyen: Lámina impresa en papel fotográfico brillante de alta calidad\nMarco de madera kiri (uno de los árboles mas sustentables del planeta)pintado en el color que vos elijas. Puede ser natural, blanco o negro.\nVidrio y fondo de mdf.\nAccesorios necesarios para colgar (clavos incluidos)\n\nNo esperes mas de lo que tenés que esperar, en 5 días hábiles lo tenés en tu casa. Consultá por envíos a todo el país. Hecho en Argentina", Buho.jpg, 1),
(default, "ELEPHANT ON BLACK", "Sumale Diseño a tu hogar con nuestro cuadros pensados para cada rincón de tu casa. Nuestros productos se entregan listos para colgar. Incluyen: Lámina impresa en papel fotográfico brillante de alta calidad\nMarco de madera kiri (uno de los árboles mas sustentables del planeta)pintado en el color que vos elijas. Puede ser natural, blanco o negro.\nVidrio y fondo de mdf.\nAccesorios necesarios para colgar (clavos incluidos)\n\nNo esperes mas de lo que tenés que esperar, en 5 días hábiles lo tenés en tu casa. Consultá por envíos a todo el país. Hecho en Argentina", elefante-en-fondo-negro.jpg, 1),
(default, "COUPLE OF DEERS", "Sumale Diseño a tu hogar con nuestro cuadros pensados para cada rincón de tu casa. Nuestros productos se entregan listos para colgar. Incluyen: Lámina impresa en papel fotográfico brillante de alta calidad\nMarco de madera kiri (uno de los árboles mas sustentables del planeta)pintado en el color que vos elijas. Puede ser natural, blanco o negro.\nVidrio y fondo de mdf.\nAccesorios necesarios para colgar (clavos incluidos)\n\nNo esperes mas de lo que tenés que esperar, en 5 días hábiles lo tenés en tu casa. Consultá por envíos a todo el país. Hecho en Argentina", Ciervos.jpg, 1);




