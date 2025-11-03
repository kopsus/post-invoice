// components/pdf/InvoicePDFTemplate.tsx

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Tentukan tipe data yang diharapkan oleh template ini
interface InvoicePDFProps {
  invoiceId: string;
  status: string;
  customerName: string;
  // Tambahkan data lain yang Anda perlukan di sini...
}

// Buat style (ini seperti CSS, tapi untuk PDF)
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Helvetica-Bold",
  },
  section: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 4,
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    color: "grey",
  },
});

// Ini adalah komponen template PDF Anda
const InvoicePDFTemplate: React.FC<InvoicePDFProps> = ({
  invoiceId,
  status,
  customerName,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>INVOICE</Text>

      <View style={styles.section}>
        <Text style={styles.header}>Detail Invoice</Text>
        <Text style={styles.text}>No. Invoice: {invoiceId}</Text>
        <Text style={styles.text}>Status: {status}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Ditagihkan Kepada:</Text>
        <Text style={styles.text}>{customerName}</Text>
      </View>

      {/* Tambahkan tabel item, total, dll. di sini */}
    </Page>
  </Document>
);

export default InvoicePDFTemplate;
