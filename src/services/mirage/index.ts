import { createServer, Factory, Model } from "miragejs";

type PointProps = {
  id: string;
  entity: string;
  items: Array<string>;
  address: string;
  number: number;
  city: string;
  state: string;
  imageUrl: string;
};

type PointDataProps = {
  city: string;
  state: string;
};

export function makeServer() {
  return createServer({
    environment: "development",

    models: {
      point: Model.extend<Partial<PointProps>>({}),
    },

    factories: {
      point: Factory.extend<Partial<PointProps>>({
        entity: "Papersider",
        items: ["Resíduos Eletrônicos", "Pilhas e Baterias"],
        address: "Rua Rolando Júlio",
        number: 49,
        city: "São Bernardo do Campo",
        state: "São Paulo",
        imageUrl:
          "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      }),
    },

    seeds(server) {
      server.create("point");
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/points", (schema, request) => {
        const attrs = request.queryParams;

        if (!!attrs.data) {
          const data: PointDataProps = JSON.parse(attrs.data);

          return schema.where("point", {
            city: data.city,
            state: data.state,
          });
        }

        return schema.all("point");
      });

      this.post("/points", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.create("point", attrs);
      });
    },
  });
}
