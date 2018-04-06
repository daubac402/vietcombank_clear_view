$("label#ST2_Challenge").css({ "color": "#8cc63e", "font-size": "40px" });

var changeEvent = document.createEvent("HTMLEvents");
changeEvent.initEvent("change", true, true);

$("input#SoTaiKhoanNguoiHuong").blur(() => {
	$("select#LoaiNganHang").val('0');
	$("select#LoaiNganHang")[0].dispatchEvent(changeEvent);
});
$("select#LoaiNganHang").select2().on('select2:select', function (e) {
	$(this)[0].dispatchEvent(changeEvent);
});
$("select#TenNganHangHuong").select2().on('select2:select', function (e) {
	$(this)[0].dispatchEvent(changeEvent);
});
$("select#TinhThanh").select2().on('select2:select', function (e) {
	$(this)[0].dispatchEvent(changeEvent);
});
$("select#ChiNhanh").select2().on('select2:select', function (e) {
	$(this)[0].dispatchEvent(changeEvent);
});

// $("select#HinhThucChuyenTien").change(function() {
// 	$("select#MaNganHangHuong").select2().on('select2:select', function (e) {
// 		$(this)[0].dispatchEvent(changeEvent);
// 	});
// });
