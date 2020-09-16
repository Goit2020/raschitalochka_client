import React from 'react';
import InfoField from 'components/InfoField/InfoField';
import css from './ActionInfo.module.css';

const pad = (str) => str.padStart(2, '0');

const dateToString = (date) => {
  const day = pad(String(date.getDate()));
  const month = pad(String(date.getMonth() + 1));
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

const ActionInfo = ({ transactions, categories }) => {
  return (
    <div className={css.mainWrapper}>
      <div className={css.header}>
        <p className={css.header__name}>date</p>
        <p className={css.header__name}>type</p>
        <p className={css.header__name}>category</p>
        <p className={css.header__name}>comments</p>
        <p className={css.header__name}>amount</p>
        <p className={css.header__name}>balance after</p>
      </div>
      {categories && !!transactions.length ? (
        transactions.map(({ id, date, type, categoryId, comment, amount, balanceAfter }) => {
          const dateStr = dateToString(new Date(date));

          const category = categories.find(({ id }) => id == categoryId);

          return (
            <div key={id} className={css.wrapper}>
              <div className={css.backLine}></div>
              <div className={css.infoWrapper}>
                <InfoField name="Date" value={dateStr} />
                <InfoField name="Type" value={type} type={type} />
                <InfoField name="Category" value={category.name} type={type} />
                <InfoField name="Comments" value={comment} type={type} />
                <InfoField name="Amount" value={amount} type={type} />
                <InfoField name="Balance After" value={balanceAfter} type={type} />
              </div>
            </div>
          );
        })
      ) : (
        <p className={css.noTransactions}>No transactions</p>
      )}
    </div>
  );
};

export default ActionInfo;
