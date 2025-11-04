import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { formatDateID } from "@/lib/formatDate";
import { formatIDR } from "@/lib/formatIDR";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
    color: "#000",
    lineHeight: 1.4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerRight: {
    fontSize: 9,
    textAlign: "left",
  },
  headerRightText: {
    marginBottom: 2,
  },
  titleSection: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
  },
  sectionLeft: {
    width: "55%",
  },
  sectionRight: {
    width: "40%",
  },
  row: {
    flexDirection: "row",
    marginBottom: 2,
  },
  label: {
    width: "32%",
  },
  colon: {
    width: "4%",
  },
  value: {
    width: "64%",
  },
  body: {
    marginTop: 20,
    textAlign: "justify",
  },
  table: {
    marginTop: 10,
    width: "50%",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColLeft: {
    width: "75%",
    padding: 5,
  },
  tableColRight: {
    width: "25%",
    padding: 5,
    textAlign: "right",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  italic: {
    fontFamily: "Helvetica-Oblique",
  },
  terbilangRow: {
    flexDirection: "row",
    padding: 5,
  },
  signature: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  signBlock: {
    width: "45%",
    textAlign: "center",
  },
  signName: {
    marginTop: 50,
    textDecoration: "underline",
    fontFamily: "Helvetica-Bold",
  },
});

const InvoicePDFTemplate = () => {
  // === Data Dummy ===
  const data = {
    noPKS: "—",
    tglStatement: "2025-10-03",
    invoiceNumber: "09289/KCUBD/102025",
    periodeInvoice: "Oktober 2025",
    lampiran: "1 Berkas",
    spesifikasi: "Dokumen/Barang",
    customerName: "PT BCA FINANCE (BPKB)",
    totalAmount: 3047000,
    terbilang: "Tiga Juta Empat Puluh Tujuh Ribu Rupiah",
    rekeningBank:
      "Bank Mandiri Cab Asia Afrika Selatan dengan Nomor Rekening: 130.00.7200005.5 a/n PT Pos Indonesia (Persero)",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image src="/logo-blue.png" style={styles.logo} />
          <View style={styles.headerRight}>
            <Text>Kepada Yth.</Text>
            <Text>Bapak / Ibu Pimpinan</Text>
            <Text style={styles.bold}>{data.customerName}</Text>
            <Text>BANDUNG</Text>
          </View>
        </View>

        {/* INFORMASI INVOICE */}
        <View style={styles.titleSection}>
          <View style={styles.sectionLeft}>
            <View style={styles.row}>
              <Text style={styles.label}>No PKS</Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.value}>{data.noPKS}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Tgl Statement</Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.value}>
                {formatDateID(data.tglStatement)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>No Invoice</Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.value}>{data.invoiceNumber}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Periode Invoice</Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.value}>{data.periodeInvoice}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Lampiran</Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.value}>{data.lampiran}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Spesifikasi Kiriman</Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.value}>{data.spesifikasi}</Text>
            </View>
          </View>
        </View>

        {/* ISI SURAT */}
        <View style={styles.body}>
          <Text>Dengan hormat,</Text>
          <Text>
            Bersama ini kami sampaikan tagihan biaya pengiriman dokumen/barang
            melalui layanan jasa Pos. Mohon diperiksa kembali kebenaran tagihan
            ini, ringkasan di bawah kami anggap benar apabila tidak ada
            pengaduan dalam waktu 14 (empat belas) hari setelah tanggal cetak
            tagihan.
          </Text>
        </View>

        {/* TABEL */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColLeft}>1. Biaya Pengiriman Bulan</Text>
            <Text style={styles.tableColRight}>
              {formatIDR(data.totalAmount)}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColLeft}>2. Ppn 11%</Text>
            <Text style={styles.tableColRight}>0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColLeft}>3. Diskon</Text>
            <Text style={styles.tableColRight}>0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableColLeft, styles.bold]}>
              Jumlah Tagihan
            </Text>
            <Text style={[styles.tableColRight, styles.bold]}>
              {formatIDR(data.totalAmount)}
            </Text>
          </View>
          <View style={styles.terbilangRow}>
            <Text style={styles.bold}>Terbilang :</Text>
            <Text style={styles.italic}>{data.terbilang}</Text>
          </View>
        </View>

        {/* PENJELASAN */}
        <Text style={styles.body}>
          Sehubungan dengan itu, mohon kiranya tagihan tersebut dapat dilunasi
          paling lambat 14 (empat belas) hari setelah Surat tagihan ini dan
          pelunasan dapat ditransfer ke rekening{" "}
          <Text style={styles.bold}>{data.rekeningBank}</Text>. Pembayaran harap
          mencantumkan keterangan:{" "}
        </Text>

        <Text style={styles.body}>
          Pembayaran Invoice No :{" "}
          <Text style={styles.bold}>{data.invoiceNumber}</Text>
        </Text>

        <Text style={styles.body}>
          Perlu kami sampaikan bahwa dengan tidak mengurangi rasa hormat, kami
          tidak dapat menerima pembayaran dengan menggunakan Cek/Bilyet Giro.
          Kuitansi bermeterai akan kami terbitkan apabila sudah ada konfirmasi
          pelunasan dari Saudara. Untuk keterlambatan pembayaran akan dikenakan
          denda sesuai dengan ketentuan yang berlaku. Apabila Saudara telah
          melakukan pembayaran melalui bank dan pelaporan bukti potong pph 23
          harap konfirmasi melalui email: widiyanti.lestari@posindonesia.co.id
          atau mengirimkan bukti transfer fax ke no. 022-4240725 paling lambat 1
          (satu) bulan setelah pembayaran.
        </Text>

        <Text style={styles.body}>
          Demikian kami sampaikan atas kepercayaan, perhatian, serta kerjasama
          yang telah terjalin, kami ucapkan terima kasih.
        </Text>

        {/* TANDA TANGAN */}
        <View style={styles.signature}>
          <View style={styles.signBlock}>
            <Text>Manajer Penjualan Bisnis Korporat</Text>
            <Text style={styles.signName}>_____________________</Text>
          </View>
          <View style={styles.signBlock}>
            <Text>Manajer Financial Business Partner</Text>
            <Text style={styles.signName}>_____________________</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDFTemplate;
