import DefaultTypography from './Typography';
import Text from './Text';
import Title from './Title';
import Paragraph from './Paragraph';

export type TypographyProps = typeof DefaultTypography & {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography = DefaultTypography as TypographyProps;

Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
