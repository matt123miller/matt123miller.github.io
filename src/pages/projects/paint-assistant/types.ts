type RGB = {
  r: Number;
  g: Number;
  b: Number;
};

type PaintRecord = {
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
  rgb?: RGB;
};

type PaintData = Array<PaintRecord>;

export type { PaintRecord, PaintData, RGB };
