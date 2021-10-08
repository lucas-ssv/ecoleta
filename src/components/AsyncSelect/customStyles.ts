export const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: "100%",
    color: "var(--support-text)",
    marginBottom: "0.5rem",
  }),
  control: (provided: any) => ({
    ...provided,
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "0.5rem",
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
};
