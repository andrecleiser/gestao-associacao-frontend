export interface Token {
    iat: number;
    upn: string;
    preferred_username: string;
    exp: number;
    iss: string;
    groups: string[];
    jti: string;
    idUsuario: number;
}