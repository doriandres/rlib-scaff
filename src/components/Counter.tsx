import React, { useCallback, useState } from "react";
import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";

export type CounterProps = {
  initialValue?: number;
  step?: number;
};

export function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount(count + step), [count, step]);

  return (
    <Button icon={<AddRegular />} appearance="primary" shape="circular"  onClick={increment}>
      You have clicked the button {count} times
    </Button>
  );
}
