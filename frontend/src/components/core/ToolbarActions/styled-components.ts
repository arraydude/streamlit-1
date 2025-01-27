/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"
import { transparentize } from "color2k"

export const StyledActionButtonContainer = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.sm,
  alignItems: "center",
  // line height should be the same as the icon size
  lineHeight: theme.iconSizes.md,
}))

export interface StyledActionButtonIconProps {
  icon: string
}

export const StyledActionButtonIcon = styled.div<StyledActionButtonIconProps>(
  ({ theme, icon }) => ({
    background: `url("${icon}") no-repeat center / contain`,

    // NOTE: We intentionally don't use any of the preset theme iconSizes here
    // so that icon scaling is unchanged from what we receive from the
    // withS4ACommunication hoc.
    width: "1rem",
    height: "1rem",

    ".stActionButton:hover &, .stActionButton:focus &": {
      background: "none",
      backgroundColor: theme.colors.primary,
      mask: `url("${icon}") no-repeat center / contain`,
    },
    "&:active, .stActionButton:active &": {
      background: "none",
      backgroundColor: transparentize(theme.colors.primary, 0.5),
      mask: `url("${icon}") no-repeat center / contain`,
    },
  })
)
