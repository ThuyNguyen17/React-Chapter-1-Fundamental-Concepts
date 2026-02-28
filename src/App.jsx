import { useState, useMemo } from "react";
import "./App.css";

function App() {
  // ================== STATE ==================
  const [nameUser] = useState("Nguyễn Thị Thùy");
  const [classNameUser] = useState("22DTHB2");

  const [ImgUrl] = useState("https://th.bing.com/th/id/OIP.9GkZgQhgzDFTMJ_VH4vF4QHaEK?w=314&h=180&c=7&r=0&o=7&pid=1.7&rm=3");
  const [linkInfo] = useState("https://react.dev");

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("<b>Hello React</b>");

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [active, setActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [nameHero, setNameHero] = useState("");

  const [blackpink] = useState([
    {
      name: "Lisa",
      image:
        "https://cdn-origin.cool-style.com.tw/cool/2024/06/VS-YouTube-LISA-ROCKSTAROfficialMusicVideo-359.png",
    },
    {
      name: "Jennie",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.qPyS1VTPUw4Ld3tMCBaF7QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ]);

  // ================== METHODS ==================

  const renderTaiHayXiu = () => {
    return Math.random() > 0.5 ? "Tài" : "Xỉu";
  };

  const taoSoNut = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleClickMe = () => {
    alert("Hello React!");
  };

  const handleIncrement = (num = 1) => {
    setCount((prev) => prev + num);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Submit thành công!");
  };

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleActive = () => {
    setActive(!active);
  };

  const handleNameHero = (hero) => {
    setNameHero(hero);
  };

  // ================== COMPUTED ==================
  const fullName = useMemo(() => {
    return lastName + " " + firstName;
  }, [lastName, firstName]);

  // ================== RENDER ==================

  return (
    <div className="container">
      <h1 className="text-center">React Chapter 1</h1>

      {/* INTERPOLATION */}
      <section>
        <h2>Interpolation</h2>
        <p>Cho phép nhúng biến hoặc biểu thức vào trong chuỗi một cách trực tiếp</p>
        <hr />
        <p><strong>Tên:</strong> {nameUser}</p>
        <p><strong>Lớp:</strong> {classNameUser}</p>
      </section>

      {/* BIND ATTRIBUTE */}
      <section>
        <h2>Bind Attribute</h2>
        <p>Kỹ thuật dùng để gắn (liên kết) giá trị động từ dữ liệu vào thuộc tính của thẻ HTML.</p>
        <hr />
        <div className="text-center">
          <img src={ImgUrl} className="img-thumbnail" alt="lisa" />
          <br />
          <a className="btn btn-info mt-3" href={linkInfo} target="_blank" rel="noopener noreferrer">
            Thông tin chi tiết
          </a>
        </div>
      </section>

      {/* METHOD */}
      <section>
        <h2>Method</h2>
        <p>
          <strong>Tài Hay Xỉu:</strong> {renderTaiHayXiu()} - {taoSoNut()}
        </p>
      </section>

      {/* RAW HTML */}
      <section>
        <h2>Raw HTML</h2>
        <p>Đoạn HTML thô (nguyên bản) được chèn trực tiếp vào trang web mà không qua xử lý escape</p>
        <hr />
        <div className="alert alert-info" dangerouslySetInnerHTML={{ __html: message }} />
      </section>

      {/* EVENT */}
      <section>
        <h2>Event</h2>
        <hr />
        <p><strong>Biến đếm:</strong> {count}</p>

        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-info"
            onClick={() => handleIncrement()}
          >
            Tăng 1
          </button>

          <button
            className="btn btn-warning"
            onClick={() => handleIncrement(10)}
          >
            Tăng 10
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="mt-3">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </section>

      {/* TWO WAY BINDING */}
      <section>
        <h2>Two-way-binding</h2>
        <hr />
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập nội dung..."
        />
        <div className="alert alert-danger mt-3">
          <strong>Messages:</strong> {message}
        </div>
      </section>

      {/* COMPUTED */}
      <section>
        <h2>Computed</h2>
        <hr />
        <input
          placeholder="Họ"
          className="form-control mb-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Tên"
          className="form-control mb-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <div className="alert alert-success">
          <strong>Họ Và Tên:</strong> {fullName || "Chưa nhập"}
        </div>
      </section>

      {/* CONDITIONAL */}
      <section>
        <h2>Conditional rendering</h2>
        <hr />
        <div className="text-center">
          {isLogin ? (
            <div>
              <p className="alert alert-success">Đã đăng nhập</p>
              <button className="btn btn-warning" onClick={handleLogin}>
                Đăng xuất
              </button>
            </div>
          ) : (
            <button className="btn btn-info" onClick={handleLogin}>
              Đăng nhập
            </button>
          )}
        </div>
      </section>

      {/* LIST RENDERING */}
      <section>
        <h2>List Rendering</h2>
        <p>Hiển thị danh sách thành viên Blackpink</p>
        <hr />
        <div className="row">
          {blackpink.map((item, index) => (
            <div key={index} className="col-6">
              <div className="p-3 text-center">
                <h4>{item.name}</h4>
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;