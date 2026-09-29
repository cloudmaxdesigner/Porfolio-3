import { Text } from "./Text";

export function Copyright({ name = "Mugen®", statement = "All rights reserved." }: { name?: string; statement?: string }) {
  return (
    <Text variant="b-small">
      © {new Date().getFullYear()} {name} {statement}
    </Text>
  );
}
