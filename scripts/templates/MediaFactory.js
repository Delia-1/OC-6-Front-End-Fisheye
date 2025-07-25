import Picture from '../models/Picture.js';
import Video from '../models/Video.js'

export class MediaFactory {
  static create(mediaData) {
    if(mediaData.image) {
      return new Picture(mediaData);
    }
    if(mediaData.video) {
      return new Video(mediaData);
    }
    throw new Error('Type de média non supporté');
  }
}
