export type value = {
  name: string;
  desc: string;
};
export interface ICategory {
  imageUrl: _SourceUri;
  label: string;
  value?: value;
}
