declare namespace API {
  declare namespace Quote {
    type Response = Module.Quote.Type

    type GetByIdParams = {
      id: Module.Quote.Type["id"]
    }
  }
}