//Produto
class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

// Builder
class CarroBuilder {
  constructor() {
    this.carro = new Car();
  }

  setbrand(brand) {
    this.carro.brand = brand;
    return this;
  }

  setmodel(model) {
    this.carro.model = model;
    return this;
  }

  setyear(year) {
    this.carro.year = year;
    return this;
  }

  setengine(engine) {
    this.carro.engine = engine;
    return this;
  }

  setcolor(color) {
    this.carro.color = color;
    return this;
  }

  setgps(gps) {
    this.carro.gps = gps;
    return this;
  }

  build() {
    return this.carro;
  }
}

// Director → monta configurações pré-definidas
class CarDirector {
  static buildCarro1() {
    return new CarroBuilder()
      .setbrand("Intel i9")
      .setmodel("NVIDIA RTX 4090")
      .setyear("64GB")
      .setengine("2TB SSD")
      .setcolor("1000W")
      .setgps("Full Tower")
      .build();
  }

  static buildCarro2() {
    return new CarroBuilder()
      .setbrand("Intel i9")
      .setmodel("NVIDIA RTX 4090")
      .setyear("64GB")
      .setengine("2TB SSD")
      .setcolor("1000W")
      .setgps("Full Tower")
      .build();
  }

  static buildCarro3() {
    return new CarroBuilder()
      .setbrand("Intel i9")
      .setmodel("NVIDIA RTX 4090")
      .setyear("64GB")
      .setengine("2TB SSD")
      .setcolor("1000W")
      .setgps("Full Tower")
      .build();
  }
}

// Uso
const gamer = CarDirector.buildCarro1();
const office = CarDirector.buildCarro2();
const dev = CarDirector.buildCarro3();
const satc = new CarroBuilder().setcolor("marrom turquesa").build();

gamer.showDetails();
office.showDetails();
dev.showDetails();
satc.showDetails();
