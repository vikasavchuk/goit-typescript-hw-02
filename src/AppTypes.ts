export interface Image {
    id: number;
    alt_description: string;
    urls: {
      regular: string;
      small: string;
    };
    description: string;
}

export interface selectedPhoto {
    src: string;
    description: string;
}

export interface fetchPhotosResponse {
    total: number;
    total_pages: number;
    results: Image[];
}