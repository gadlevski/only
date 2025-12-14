import type { PropsWithChildren } from "react";
import * as styles from './style.module.scss';

export const Layout = (props: PropsWithChildren) => (
  <div className={styles.grid} {...props}>
    {props.children}
  </div>);