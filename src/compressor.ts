type ImageOptions = {
    strict?: boolean;
    checkOrientation?: boolean;
    retainExif?: boolean;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    width?: number;
    height?: number;
    resize?: 'none' | 'contain' | 'cover';
    quality?: number;
    mimeType?: string;
    convertTypes?: string[];
    convertSize?: number;
    beforeDraw?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
    drew?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
    success?: (file: File | Blob) => void;
    error?: (err: Error) => void;
  };
  
  type OrientationData = {
    rotate: number;
    scaleX: number;
    scaleY: number;
  };
  
  const DEFAULTS: ImageOptions = {
    strict: true,
    checkOrientation: true,
    retainExif: false,
    maxWidth: Infinity,
    maxHeight: Infinity,
    minWidth: 0,
    minHeight: 0,
    resize: 'none',
    quality: 0.8,
    mimeType: 'auto',
    convertTypes: ['image/png'],
    convertSize: 5000000,
  };
  
  class Compressor {
    private file: File | Blob;
    private options: ImageOptions;
    private aborted: boolean;
    private result: File | Blob | null;
    private image: HTMLImageElement;
    private reader?: FileReader;
    private exif: ArrayBuffer[];
  
    constructor(file: File | Blob, options: ImageOptions = {}) {
      this.file = file;
      this.options = { ...DEFAULTS, ...options };
      this.aborted = false;
      this.result = null;
      this.image = new Image();
      this.exif = [];
      this.init();
    }
  
    private init() {
      if (!this.isBlob(this.file)) {
        this.fail(new Error('The first argument must be a File or Blob object.'));
        return;
      }
  
      const mimeType = this.file.type;
      if (!this.isImageType(mimeType)) {
        this.fail(new Error('The first argument must be an image File or Blob object.'));
        return;
      }
  
      if (!window.URL || !FileReader) {
        this.fail(new Error('The current browser does not support image compression.'));
        return;
      }
  
      const isJPEGImage = mimeType === 'image/jpeg';
      const { checkOrientation, retainExif } = this.options;
  
      const reader = new FileReader();
      this.reader = reader;
  
      reader.onload = ({ target }: ProgressEvent<FileReader>) => {
        const result = target?.result as ArrayBuffer;
        this.load({
          url: URL.createObjectURL(this.file),
        });
      };
  
      reader.onerror = () => {
        this.fail(new Error('Failed to read the image with FileReader.'));
      };
  
      reader.readAsArrayBuffer(this.file);
    }
  
    private load(data: { url: string }) {
      const { image } = this;
  
      image.onload = () => {
        this.draw({
          naturalWidth: image.naturalWidth,
          naturalHeight: image.naturalHeight,
          ...data,
        });
      };
  
      image.onerror = () => {
        this.fail(new Error('Failed to load the image.'));
      };
  
      image.src = data.url;
    }
  
    private draw({ naturalWidth, naturalHeight, url }: { naturalWidth: number; naturalHeight: number; url: string }) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;
  
      // Set up dimensions and draw logic here
      // ...
      // Implement the image drawing logic
    }
  
    private isBlob(value: unknown): value is Blob {
      return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
    }
  
    private isImageType(value: string): boolean {
      return /^image\/.+$/.test(value);
    }
  
    private fail(err: Error) {
      if (this.options.error) {
        this.options.error(err);
      } else {
        throw err;
      }
    }
  
    static setDefaults(options: Partial<ImageOptions>) {
      Object.assign(DEFAULTS, options);
    }
  }
  
  export default Compressor;