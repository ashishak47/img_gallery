import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';


class Pagination extends Component {
    totalPages() {
        return Math.ceil(this.props.total / this.props.perPage);
    }

    getPages() {
        let pages = [];
        for (let i = this.pgStart(); i <= this.pgEnd(); i++) {
            pages.push(i)
        };
        return pages;
    }

    pgStart() {
        let start = this.props.current - this.props.range;
        return (start > 0) ? start : 1
    }

    pgEnd() {
        const end = this.props.current + this.props.range;
        const totalPages = this.totalPages();
        return (end < totalPages) ? end : totalPages;
    }

    nextPage() {
        return this.props.current + 1;
    }

    prevPage() {
        return this.props.current - 1;
    }

    isFirstPageInRange() {
        return this.pgStart() !== 1
    }

    isLastPageInRange() {
        return this.pgEnd() < this.totalPages();
    }

    hasPrev() {
        return this.props.current > 1;
    }

    hasNext() {
        return this.props.current < this.totalPages();
    }

    onPageChange(page) {
        this.props.onPageChanged(page);
    }

    render() {
        return (
            <div className="pagination">
                <div className="pagination-prev">
                    {this.hasPrev() &&
                        <a href="#"
                            onClick={e => this.onPageChange(this.prevPage())}
                        >Prev
                    </a>
                    }
                </div>

                <div className="pagination-mid">
                    <ul>
                        {this.isFirstPageInRange() &&
                            <li>
                                <a href="#" onClick={e => this.onPageChange(1)}>1</a>
                            </li>
                        }
                        {this.isFirstPageInRange() && <li>...</li>}
                        {
                            this.getPages().map((page, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#"
                                            onClick={e => this.onPageChange(page)}
                                            className={this.props.current === Number(page) ? 'current' : ''}
                                        >{page}</a>
                                    </li>
                                );
                            })
                        }
                        {this.isLastPageInRange() && <li>...</li>}

                        {this.isLastPageInRange() &&
                            <li>
                                <a href="#" onClick={e => this.onPageChange(this.totalPages())}>{this.totalPages()}</a>
                            </li>
                        }
                    </ul>
                </div>

                <div className="pagination-last">
                    {this.hasNext() &&
                        <a href="#"
                            onClick={e => this.onPageChange(this.nextPage())}
                        >Next</a>
                    }
                </div>
            </div>
        );
    }
};

Pagination.defaultProps = {
    range: 2
}

Pagination.propTypes = {
    onPageChanged: PropTypes.func.isRequired,
    perPage: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}


export default Pagination;