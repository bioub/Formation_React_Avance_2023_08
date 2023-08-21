import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  children(hello: (v: string) => string): ReactNode;
};

function PassHello(props: Props) {
  if (!props.children) return;

  return props.children((n: string) => `Hello ${n}`);
}

export default PassHello;
