export class UnseenTubeFilter {
  public maxViews: number;
  public order: filterOrder;
}

enum filterOrder {
  ASC,
  DEC
}
