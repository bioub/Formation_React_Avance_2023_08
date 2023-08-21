export function withHello(InnerComponent: any) {
  function OuterComponent(props: any) {
    return <InnerComponent {...props} hello={(n: string) => `Hello ${n}`} />
  }

  OuterComponent.displayName = `withHello(${InnerComponent.displayName ?? InnerComponent.name})`

  return OuterComponent;
}
