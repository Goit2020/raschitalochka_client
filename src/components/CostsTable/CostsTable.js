import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select/Select';
import colors from 'libs/colors';
import { months, years } from 'libs/optionsForSelect';
import Styles from './CostsTable.module.css';

const CostsTable = ({ transactionsSummary, transactionsCategories }) => (
  <>
    <div className={Styles.select}>
      <Select name={'Month'} options={months} />
      <Select name={'Year'} options={years} />
    </div>
    <div className={Styles.table}>
      <div className={Styles.tableHeader}>
        <span className={Styles.tableHeaderItem}>Categories</span>
        <span className={Styles.tableHeaderItem}>Amount</span>
      </div>
      <div className={Styles.tableBody}>
        {transactionsSummary.length !== 0 ? (
          transactionsSummary.map((i, idx) => (
            <div className={Styles.tableItem} key={i.id}>
              <div className={Styles.icon} style={{ backgroundColor: colors[idx] }}></div>
              <span className={Styles.name}>
                {transactionsCategories.find((j) => j.id === Number(i.categoryId)).name}
              </span>
              <span>{i.totalAmount.toFixed(2)}</span>
            </div>
          ))
        ) : (
          <p className={Styles.noTransactions}>no transactions yet</p>
        )}
      </div>
    </div>
  </>
);

CostsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default CostsTable;
