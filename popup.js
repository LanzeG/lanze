class DonationPopup {
    constructor() {
      this.popup = null;
      this.closeButton = null;
      this.paymentOptions = null;
      this.qrCodeContainer = null;
      this.qrCodeImg = null;
      this.qrCodeText = null;
      this.isLoaded = false;
    }
  
    async load() {
      if (this.isLoaded) return;
  
      const response = await fetch('donate-popup.html');
      const html = await response.text();
  
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      this.popup = tempDiv.firstElementChild;
  
      document.body.appendChild(this.popup);
      this.closeButton = this.popup.querySelector('.close');
      this.paymentOptions = this.popup.querySelectorAll('.payment-option');
      this.qrCodeContainer = this.popup.querySelector('.qr-code-container');
      this.qrCodeImg = this.popup.querySelector('#qrCode');
      this.qrCodeText = this.popup.querySelector('#qrCodeText');
  
      this.addEventListeners();
      this.addStyles();
  
      this.isLoaded = true;
    }
  
    addEventListeners() {
      if (this.closeButton) {
        this.closeButton.addEventListener('click', () => this.hide());
      } else {
        console.warn('Close button not found in the popup');
      }
      
      window.addEventListener('click', (event) => {
        if (event.target === this.popup) {
          this.hide();
        }
      });
  
      this.paymentOptions.forEach(option => {
        option.addEventListener('click', () => this.showQRCode(option.dataset.method));
      });
    }
  
    addStyles() {
      const style = document.createElement('style');
      style.textContent = `
        .popup {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
        .popup-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 90%;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          font-size: 24px;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .payment-options {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }
        .payment-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
        }
        .payment-option img {
          width: 40px;
          height: 40px;
          margin-bottom: 5px;
        }
        .qr-code-container {
          text-align: center;
          display: none;
        }
        #qrCode {
          max-width: 200px;
          margin: 0 auto;
        }
      `;
      document.head.appendChild(style);
    }
  
    async show() {
      await this.load();
      this.popup.style.display = 'block';
    }
  
    hide() {
      if (this.popup) {
        this.popup.style.display = 'none';
        if (this.qrCodeContainer) {
          this.qrCodeContainer.style.display = 'none';
        }
      }
    }
  
    showQRCode(method) {
      const qrCodes = {
        paypal: 'https://nationalseniors.com.au/generated/1280w-3-2/qrcode1-1-png.png?1611792983?height=200&width=200',
        gcash: 'https://nationalseniors.com.au/generated/1280w-3-2/qrcode1-1-png.png?1611792983?height=200&width=200',
        maya: 'https://nationalseniors.com.au/generated/1280w-3-2/qrcode1-1-png.png?1611792983?height=200&width=200',
        bank: 'https://nationalseniors.com.au/generated/1280w-3-2/qrcode1-1-png.png?1611792983?height=200&width=200'
      };
  
      if (this.qrCodeImg && this.qrCodeText && this.qrCodeContainer) {
        this.qrCodeImg.src = qrCodes[method];
        this.qrCodeText.textContent = `These options are disabled ${method.charAt(0).toUpperCase() + method.slice(1)}`;
        this.qrCodeContainer.style.display = 'block';
      } else {
        console.error('QR code elements not found');
      }
    }
  }
  
  window.donationPopup = new DonationPopup();