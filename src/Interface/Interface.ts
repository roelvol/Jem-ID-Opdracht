export interface Artikel {
    ID:               number;
    Code:             string;
    Naam:             string;
    Potmaat:          Potmaat;
    PotmaatNumeriek:  number;
    Hoogte:           string;
    VbnProductCode:   string;
    VbnProductNaam:   string;
    ArtikelGroepNaam: Naam;
    ArtikelGroep:     ArtikelGroep[];
    Eigenschappen:    Eigenschappen[];
    Beladingen:       Beladingen[];
    Fotos:            Foto[];
    AanbodRegels:     AanbodRegel[];
}

export interface AanbodRegel {
    ID:                  number;
    ArtikelInfoID:       number;
    AantalStuks:         number;
    PeriodeOmschrijving: string;
    StartDatum:          Date;
    EindDatum:           Date;
    VanafPrijs:          number;
}

export interface ArtikelGroep {
    ID:   number;
    Code: Code;
    Naam: Naam;
}

export enum Code {
    Dracaena = "DRACAENA",
    Onb = "ONB",
}

export enum Naam {
    Dracaena = "Dracaena",
    Onbekend = "Onbekend",
}

export interface Beladingen {
    ID:                   number;
    ArtikelInfoID:        number;
    FustCode:             string;
    FustOmschrijving:     string;
    Ladingdrager:         Ladingdrager;
    Omschrijving:         string;
    AantalStuksPerFust:   number;
    AantalFustPerLaag:    number;
    AantalLagenPerDrager: number;
}

export enum Ladingdrager {
    DeenseContainer = "Deense container",
    EuroPallet = "Euro-pallet",
    EuroRolcontainer = "Euro-rolcontainer",
    Stapelwagen = "Stapelwagen",
}

export interface Eigenschappen {
    ID:             number;
    ArtikelInfoID:  number;
    EigenschapCode: EigenschapCode;
    EigenschapNaam: EigenschapNaam;
    Waarde:         string;
}

export enum EigenschapCode {
    Eig117 = "EIG117",
    S01 = "S01",
    S02 = "S02",
    S03 = "S03",
    S06 = "S06",
    S07 = "S07",
    S15 = "S15",
    S21 = "S21",
    S32 = "S32",
    S36 = "S36",
    S52 = "S52",
    S54 = "S54",
    S62 = "S62",
    S98 = "S98",
    T17 = "T17",
    Thema = "THEMA",
}

export enum EigenschapNaam {
    Categorie = "Categorie",
    Combinatiehoogte = "Combinatiehoogte",
    GewichtGemiddeld = "Gewicht (gemiddeld)",
    Kwaliteitsgroep = "Kwaliteitsgroep",
    LandVanHerkomstBedrijf = "Land van herkomst (bedrijf)",
    MaxPlanthoogteInclusiefPot = "Max planthoogte inclusief pot",
    MinAantalKoppenHoogsteStam = "Min aantal koppen hoogste stam",
    MinAantalStekkenPlantenPerPot = "Min aantal stekken/planten per pot",
    MinPlanthoogteInclusiefPot = "Min planthoogte inclusief pot",
    MinRanklengte = "Min ranklengte",
    Plantvorm = "Plantvorm",
    Potkleur = "Potkleur",
    Potmaat = "Potmaat",
    Thema = "Thema",
    Themadagen = "Themadagen",
    Transporthoogte = "Transporthoogte",
}

export interface Foto {
    ID:            number;
    ArtikelInfoID: number;
    UrlThumb50:    string;
    UrlThumb220:   string;
    UrlThumb360:   string;
    UrlThumb600:   string;
    UrlOrigineel:  string;
}

export enum Potmaat {
    The12CM = "12 cm",
    The13CM = "13 cm",
    The17CM = "17 cm",
    The9CM = "9 cm",
}
