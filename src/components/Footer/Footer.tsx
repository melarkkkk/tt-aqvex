import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <section className={s.footerLeft}>
        <a href="#" className={s.footerLink}>
          <span className={`${s.footerIcon} ${s.icon1}`}></span>
        </a>
        <a href="#" className={s.footerLink}>
          <span className={`${s.footerIcon} ${s.icon2}`}></span>
        </a>
        <p>AQVEX © 2026 | Все права защищены</p>
      </section>

      <section className={s.footerRight}>
        <a href="#" className={s.footerLink}>
          <span className={`${s.footerIcon} ${s.icon3}`}></span>
        </a>
        <a href="#" className={s.footerLink}>
          <span className={`${s.footerIcon} ${s.icon4}`}></span>
        </a>
        <a href="#" className={s.footerLink}>
          <span className={`${s.footerIcon} ${s.icon5}`}></span>
        </a>
        <a href="#" className={s.footerLink}>
          <span className={`${s.footerIcon} ${s.icon6}`}></span>
        </a>
      </section>
    </footer>
  );
};