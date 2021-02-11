import { useEffect, useState } from "react";

const PapanNilai = () => {
  const [skor, setSkor] = useState(10);
  useEffect(() => {
    setSkor(100);
  }, []);
  return (
    <div>
      <div>skor {skor}</div>
      <button
        onClick={() => {
          setSkor(skor + 100);
        }}
      >
        Tambah
      </button>
      <button>Kurang</button>
      <button
        onClick={() => {
          setSkor(0);
        }}
      >
        Inisialisasi
      </button>
    </div>
  );
};

export default PapanNilai;
