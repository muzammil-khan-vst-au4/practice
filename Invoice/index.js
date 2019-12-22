class Invoice {
    constructor(items = []) {
      this.currencyCode = "INR";
      this.currencySymbol = "₹";
      this.invoiceNumber = null;
      this.items = items;
      this.grossAmount = 0;
      this.discountAmount = 0;
      this.taxAmount = 0;
      this.invoiceTotal = 0;
      this.taxPercentage = 5; // %
    }
    set item(item) {
      return this.items.push(item);
    }
    get item() {
      return this.items;
    }
    calculateGrossAmount() {
      this.grossAmount = this.items.reduce((acc, cur, index) => {
        let amount = (cur.pricePerItem * cur.quantity);
        this.item[index].totalAmount = amount;
        acc = acc + amount;
        return acc;
      }, 0);
      return this.grossAmount;
    }
    // grossAmount * (taxPercentage/100)
    calculateTaxAmount() {
      this.taxAmount = (this.grossAmount - this.discountAmount ) * (this.taxPercentage/100);
      return this.taxAmount;
    }
    addDiscount(discountAmount) {
      this.discountAmount = discountAmount;
    }
    calculateInvoiceTotal() {
      this.invoiceTotal = (this.grossAmount - this.discountAmount) + this.taxAmount;
      return this.invoiceTotal;
    }
    generateInvoice() {
      this.calculateGrossAmount();
      this.calculateTaxAmount();
      this.calculateInvoiceTotal();
      this.printInvoice();
    }
    generatePDFFile() {
      // Compile HBS template
      // Pass the values to the template
      this.uploadInvoicePDF();
    }
    uploadInvoicePDF(filePath) {
      // upload the file to AWS S3 or Cloudinary
      // return invoiceURL
    }
    printInvoice() {
      console.log("Items: ", this.items);
      console.log("Gross amount: ", this.grossAmount);
      console.log("Discount amount: ", this.discountAmount);
      console.log("Tax amount: ", this.taxAmount);
      console.log(`Final invoice total is ${this.currencySymbol}${this.invoiceTotal}`)
    }
  }
  let invoiceInst = new Invoice();
  invoiceInst.item = {
      name: "Apple",
      pricePerItem: 20,
      quantity: 10
  };
  invoiceInst.item = {
      name: "Orange",
      pricePerItem: 3,
      quantity: 35
  };
  invoiceInst.item = {
      name: "Cashew",
      pricePerItem: 900,
      quantity: 3.5
  };
  invoiceInst.addDiscount(100);
  invoiceInst.generateInvoice();