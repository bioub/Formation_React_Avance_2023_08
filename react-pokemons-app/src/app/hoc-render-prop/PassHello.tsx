function PassHello(props: any) {
  return props.children((n: string) => `Hello ${n}`);
}

export default PassHello;
