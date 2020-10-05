function RectangleArea()
{
    inputWidth = prompt("Nhap chieu rong");
    inputHeight = prompt("Nhap chieu cao");

    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width * height;

    document.write("dien tich hinh chu nhat la :" + area);
}