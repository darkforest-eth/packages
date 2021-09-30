/**
 * @hidden
 */

import { Abstract } from './utility';

/**
 * The user can choose to have the client automatically choose a gas price for their transactions,
 * depending on how much they are willing to pay and how fast they want their transactions to confirm.
 */
export type AutoGasSetting = Abstract<string, 'AutoGasSetting'>;

export const AutoGasSetting = {
  Slow: 'Slow' as AutoGasSetting,
  Average: 'Average' as AutoGasSetting,
  Fast: 'Fast' as AutoGasSetting,
};
