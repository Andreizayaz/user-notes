import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@material-ui/core';

import { FlexBoxStyled, LinkStyled } from 'src/components/styledComponents';

import { CREATE_NOTE_LINK } from 'src/constants';

import { useStyles } from './styles';

type PageTitlePropsTypes = {
  isUserNotes: boolean;
  yesNotes: string;
  noNotes: string;
  title: string;
};

export const PageTitle: FC<PageTitlePropsTypes> = ({
  isUserNotes,
  yesNotes,
  noNotes,
  title
}): ReactElement => {
  const { headingSection } = useStyles();
  const { t } = useTranslation('translation', {
    keyPrefix: 'home_page'
  });

  return (
    <FlexBoxStyled
      className={headingSection}
      flexDirection='column'
      rowGap='20px'
    >
      <Typography component='h1' variant='h4'>
        {title}
      </Typography>
      <Typography component='h3' variant='h5'>
        {isUserNotes ? yesNotes : noNotes}
        {!isUserNotes && (
          <LinkStyled
            to={CREATE_NOTE_LINK}
            sx={{ width: '100%', color: 'inherit' }}
          >
            {t('create_first_note')}
          </LinkStyled>
        )}
      </Typography>
    </FlexBoxStyled>
  );
};
