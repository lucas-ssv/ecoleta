import { render } from "@testing-library/react";
import { AsyncSelect } from "../../../components/AsyncSelect";

describe("AsyncSelect component", () => {
  it("async select renders correctly", () => {
    const { getByLabelText } = render(
      <AsyncSelect
        items={[{ label: "Rio de Janeiro", value: "Rio de Janeiro" }]}
        name="cidade"
      />
    );
  });
});
