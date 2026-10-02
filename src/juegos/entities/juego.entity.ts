// Campos que se pueden cambiar de un juego, todos opcionales
interface UpdateWithOption {
  title?: string;
  genre?: string;
  platform?: string;
  price?: number;
  description?: string;
}

// Entidad que representa un videojuego
export class Juego {
  constructor(
    public id: string,
    public title: string,
    public genre: string,
    public platform: string,
    public price: number,
    public description?: string,
  ) {}

  // Si llega un valor nuevo lo guarda, si no deja el que ya tenia
  updateWith({ title, genre, platform, price, description }: UpdateWithOption) {
    this.title = title ?? this.title;
    this.genre = genre ?? this.genre;
    this.platform = platform ?? this.platform;
    this.price = price ?? this.price;
    this.description = description ?? this.description;
  }
}
