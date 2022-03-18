import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Premium</a>
          </li>
          <li>
            <a href="">Hỗ trợ</a>
          </li>
          <li>
            <a href="">Tải xuống</a>
          </li>
          <li>
            <a href="">Đăng ký</a>
          </li>
          <li>
            <a href="">Đăng nhập</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
