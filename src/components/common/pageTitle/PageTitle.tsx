import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@material-ui/core';

import { FlexBoxStyled, LinkStyled } from 'src/components/styledComponents';

import { CREATE_NOTE_LINK } from 'src/constants';

type PageTitlePropsTypes = {
  isUserNotes: boolean;
  isCreateLink: boolean;
  yesNotes?: string;
  noNotes?: string;
  subheadingSectionStyle: string;
};

export const PageTitle: FC<PageTitlePropsTypes> = ({
  isUserNotes,
  isCreateLink,
  yesNotes,
  noNotes,
  subheadingSectionStyle
}): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'home_page'
  });

  return (
    <FlexBoxStyled
      className={subheadingSectionStyle}
      flexDirection='column'
      rowGap='20px'
    >
      <Typography component='h3' variant='h5'>
        {isUserNotes ? yesNotes : noNotes}
        {!isUserNotes && isCreateLink && (
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
