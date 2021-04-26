import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageformater'
})
export class ImagePipes implements PipeTransform{
    transform(imagem: string, caminho: string = '', substituir: boolean) {
        if(caminho == 'default'){
            caminho = '../../../assets/image/filmes/'
        }

        if(imagem.length == 0 && substituir){
            imagem = 'semimg.jpg';
        }

        return "/" + caminho + "/" + imagem;
    }
}