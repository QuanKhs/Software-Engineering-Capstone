import {Injectable} from '@nestjs/common';
import {Token} from '../models/token.model';

@Injectable()
export class TokenRepository {
    async createToken(tokenDto) {
        const token = new Token(undefined);
        token.setData(tokenDto);
        token.createToken();
        return token;
    }

    async updateToken(tokenDto) {
        const token = new Token(tokenDto.id);
        token.setData(tokenDto);
        token.updateToken();
        return token;
    }

    async deleteToken(tokenId) {
        const token = new Token(tokenId);
        token.deleteToken();
        return token;
    }

    async welcomeToken(tokenId) {
        const token = new Token(tokenId);
        token.welcomeToken();
        return token;
    }
}
