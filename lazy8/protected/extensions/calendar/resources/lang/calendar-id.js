// ** I18N

// Calendar EN language
// Author: Mihai Bazon, <mihai_bazon@yahoo.com>
// Encoding: any
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("Minggu",
 "Senin",
 "Selasa",
 "Rabu",
 "Kamis",
 "Jum\'at",
 "Sabtu",
 "Minggu");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("Min",
 "Sen",
 "Sel",
 "Rab",
 "Kam",
 "Jum",
 "Sab",
 "Min");

// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 0;

// full month names
Calendar._MN = new Array
("Januari",
 "Pebruari",
 "Maret",
 "April",
 "Mei",
 "Juni",
 "Juli",
 "Agustus",
 "September",
 "Oktober",
 "Nopember",
 "Desember");

// short month names
Calendar._SMN = new Array
("Jan",
 "Peb",
 "Mar",
 "Apr",
 "Mei",
 "Jun",
 "Jul",
 "Ags",
 "Sep",
 "Okt",
 "Nop",
 "Des");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "Tentang Kalendar";

Calendar._TT["ABOUT"] =
"Pilihan DHTML Tanggal/waktu\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"Untuk versi terbaru kunjungi: http://www.dynarch.com/projects/calendar/\n" +
"Didistribusikan dibawah GNU LGPL.  Lihat http://gnu.org/licenses/lgpl.html untuk detail." +
"\n\n" +
"Pilihan Tanggal:\n" +
"- Gunakan tombol \xab, \xbb untuk pilih tahun\n" +
"- Gunakan tombol " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " untuk pilih bulan\n" +
"- Klik dan tahan tombol mouse pada tombol manapun diatas untuk pilihan lebih cepat.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Pilihan waktu:\n" +
"- Klik pada bagian waktu manapun untuk menambah\n" +
"- atau Shift-Klik untuk mengurangi\n" +
"- atau klik dan geser untuk pilihan lebih cepat";

Calendar._TT["PREV_YEAR"] = "Tahun sebelum (tahan untuk menu)";
Calendar._TT["PREV_MONTH"] = "Bulan sebelum (tahan untuk menu)";
Calendar._TT["GO_TODAY"] = "Ke Hari Ini";
Calendar._TT["NEXT_MONTH"] = "Bulan berikut (tahan untuk menu)";
Calendar._TT["NEXT_YEAR"] = "Tahun berikut (tahan untuk menu)";
Calendar._TT["SEL_DATE"] = "Pilih tanggal";
Calendar._TT["DRAG_TO_MOVE"] = "Geser untuk pindah";
Calendar._TT["PART_TODAY"] = " (hari ini)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Tampil %s lebih dulu";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Tutup";
Calendar._TT["TODAY"] = "Hari Ini";
Calendar._TT["TIME_PART"] = "(Shift-)Klik atau geser untuk ganti nilai";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%d-%m-%Y";
Calendar._TT["TT_DATE_FORMAT"] = "%A, %e %B";

Calendar._TT["WK"] = "mgg";
Calendar._TT["TIME"] = "Waktu:";
