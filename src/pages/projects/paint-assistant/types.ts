export type RGB = {
  r: Number;
  g: Number;
  b: Number;
};

export type PaintRecord = {
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
  rgb: RGB;
};

export type PaintData = Array<PaintRecord>;
