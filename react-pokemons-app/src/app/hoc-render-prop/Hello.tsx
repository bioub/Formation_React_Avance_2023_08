import { withHello } from "./withHello"

type Props = {
  name: string;
  hello(v: string): string;
}

function Hello({ name, hello }: Props) {
  return (
    <div>
      {hello(name)}
    </div>
  )
}

export default withHello(Hello);
