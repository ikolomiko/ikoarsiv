import React from 'react';
import './App.css';
import Table from "react-responsive-data-table";

function App(props) {
  const { StockData } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src="ikoarsiv.png" alt="ikoArsiv logo" className="headerimg" />
      ikoArşiv1'e Hoş Geldiniz
      </header>
      <main>
        <div className="tableContainer">
          <Table
            style={{
              opacity: 0.8,
              backgroundColor: "orange",
              color: "#000000",
              textAlign: "center",
              fontWeight: "bolder",
              width: "100%",
              fontSize: "calc(10px + 2vmin)"
            }}
            tableStyle="table table-hover table-striped table-bordered table-borderless table-responsive"
            onRowClick={(row) => { window.open(row[8]) }} // if You Want Table Row Data OnClick then assign this {row => console.log(row)}
            errormsg="Bir hata oluştu, lütfen sayfayı yeniden yükleyin"
            loadingmsg="Aradığın türde bir içerik bulamadım :/"
            isLoading={false}
            sort={true}
            search={true}
            size={100}
            data={{
              head: {
                ad: "İçeriğin Adı",
                icerik_turu: "İçerik Türü",
                ders: "Ders",
                konu: "Konu",
                yayinevi: "Yayınevi",
                dosya_turu: "Dosya Türü",
                dosya_boyutu: "İndirme Boyutu"
              },
              data: StockData.map(data => (
                {
                  id: data.id,
                  ad: data.ad,
                  icerik_turu: data.icerik_turu,
                  ders: data.ders,
                  konu: data.konu,
                  yayinevi: data.yayinevi,
                  dosya_turu: data.dosya_turu,
                  dosya_boyutu: data.dosya_boyutu,
                  url: data.url
                })
              )
            }}
          />
        </div>
      </main>
      <footer className="myFooter">
        2020 Copyright falan yok istediğiniz gibi kullanın  <br /> ⚡ ikolomiko tarafından yapıldı ⚡
      </footer>
    </div>
  );
}

export default App;
