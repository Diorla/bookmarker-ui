export default interface TypographyProps {
  variant?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'caption'
    | 'subtitle';
  [props: string]: any;
}
