import styles from "./Search.module.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Services from "../Services/Services";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CgFormatSlash } from "react-icons/cg";
import { IconContext } from "react-icons";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import loginContext from "../../index";
import { motion } from "framer-motion";
// * implement service fetching here and next service display component inside this so that
// * data can be easily filtered
function Search() {
  const loginStatus = useContext(loginContext);

  const [data, setData] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const [filter, setFilter] = useState({
    search: 0,
    sort: 0,
    category: 0,
    price: 100000,
  });

  const [paginate, setPaginate] = useState({
    limit: 9,
    skip: 0,
    totalItems: 0,
    totalPages: 0,
    presentPage: 1,
  });

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/service/count/${filter.search}/${filter.sort}/${filter.category}/${filter.price}`
      )
      .then((result) => {
        // console.log("here");
        // console.log(result.data);
        setPaginate({
          ...paginate,
          totalItems: result.data.count,
          totalPages: Math.ceil(result.data.count / 9),
        });

        axios
          .get(
            `http://localhost:5000/service/${filter.search}/${filter.sort}/${filter.category}/${filter.price}/${paginate.limit}/${paginate.skip}`
          )
          .then((result) => {
            // setData(result.data);
            // console.log(result.data);
            setFilterData(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function updatedFilterSubmit() {
    //* on submit read all the filter options retrive the data and set the initial paginate values
    //* finding total services for the filter
    console.log("update filter");
    axios
      .get(
        `http://localhost:5000/service/${filter.search}/${filter.sort}/${filter.category}/${filter.price}/10000/0`
      )
      .then((result) => {
        // setData(result.data);
        setPaginate({
          ...paginate,
          presentPage: 1,
          skip: 0,
          limit: 9,
          totalItems: result.data.length,
          totalPages: Math.ceil(result.data.length / 9),
        });
        // console.log(result.data);
        setFilterData(result.data.slice(0, 9));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function clearFilter() {
    //* on submit read all the filter options retrive the data and set the initial paginate values
    //* finding total services for the filter
    console.log("clear filter");
    // axios
    //   .get(`http://localhost:5000/services/0/0/0/100000/1000/0`)
    //   .then((result) => {
    //     // setData(result.data);
    //     console.log(result.data);
    //     setFilterData(result.data);
    //     // * must set paginate content too
    //     setPaginate({})
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(`http://localhost:5000/service/0/0/0/1000000/100000/0`)
      .then((result) => {
        // setData(result.data);
        setPaginate({
          ...paginate,
          presentPage: 1,
          skip: 0,
          limit: 9,
          totalItems: result.data.length,
          totalPages: Math.ceil(result.data.length / 9),
        });
        // console.log(result.data);
        setFilter({
          ...filter,
          search: 0,
          sort: 0,
          category: 0,
          price: 100000,
        });
        setFilterData(result.data.slice(0, 9));
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get(`http://localhost:5000/services/count/0/0/0/1000000`)
    //   .then((result) => {
    //     console.log("here");
    //     console.log(result.data);
    //     setPaginate({
    //       ...paginate,
    //       presentPage: 1,
    //       skip: 0,
    //       limit: 10,
    //       totalItems: result.data.count,
    //       totalPages: Math.ceil(result.data.count / 10),
    //     });

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function updatedFilterNext() {
    console.log("update next");
    console.log(paginate);
    //* on submit read all the filter options retrive the data and set the initial paginate values
    axios
      .get(
        `http://localhost:5000/service/${filter.search}/${
          filter.sort
        }/${filter.category}/${filter.price}/${paginate.limit}/${
          paginate.skip + 9
        }`
      )
      .then((result) => {
        // setData(result.data);
        // console.log(result.data);
        setFilterData(result.data);
        setPaginate({
          ...paginate,
          presentPage: paginate.presentPage + 1,
          skip: paginate.skip + 9,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updatedFilterPrev() {
    //* on submit read all the filter options retrive the data and set the initial paginate values
    // console.log("update prev");
    // console.log(paginate);
    //* on submit read all the filter options retrive the data and set the initial paginate values
    axios
      .get(
        `http://localhost:5000/service/${filter.search}/${
          filter.sort
        }/${filter.category}/${filter.price}/${paginate.limit}/${
          paginate.skip - 9
        }`
      )
      .then((result) => {
        // setData(result.data);
        console.log(result.data);
        setFilterData(result.data);
        setPaginate({
          ...paginate,
          presentPage: paginate.presentPage - 1,
          skip: paginate.skip - 9,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // * auth check (removing temporarily)
  // return auth === true ? (
  return loginStatus.isLogin ? (
    <div className={styles.searchBox}>
      <motion.div
        className={styles.searchComp1}
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <form
          className={styles.searchComp1}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Search"
            onChange={(e) => {
              // setSearchText(e.target.value);
              // filterChangeHandle(e.target.value, filterType);
              let searchValue = e.target.value;
              if (searchValue == "") searchValue = 0;
              setFilter({ ...filter, search: searchValue });
            }}
          />
          <label htmlFor="">Sort </label>
          <select
            onChange={(e) => {
              // setFilterType(e.target.value);
              // filterChangeHandle(searchText, e.target.value);
              let sortValue = e.target.value;
              // if (searchValue == "") searchValue = false;
              setFilter({ ...filter, sort: sortValue });
            }}
          >
            <option value={0} selected hidden>
              Select
            </option>
            <option value="priceLTH">Low to High</option>
            <option value="priceHTL">High to Low</option>
            {/* <option value="3">Recently uploaded</option> */}
          </select>

          <label htmlFor="">Category</label>
          <select
            onChange={(e) => {
              // setFilterType(e.target.value);
              // filterChangeHandle(searchText, e.target.value);
              let catValue = e.target.value;
              // if (searchValue == "") searchValue = false;
              setFilter({ ...filter, category: catValue });
            }}
          >
            <option value={0} selected hidden>
              Select
            </option>
            <option value="programming">Programming</option>
            <option value="web development">Web Development</option>
            <option value="cloud computing">Cloud Computing</option>
            <option value="communication networks">
              Communication Networks
            </option>
            <option value="machine learning">Machine Learning</option>
            <option value="game development">Game Development</option>
          </select>
          <label htmlFor="">Price(0-{filter.price})</label>
          <input
            type="range"
            name=""
            id=""
            max="100000"
            min="0"
            value={filter.price}
            onChange={(e) => {
              let priceVal = e.target.value;
              // if(p)
              setFilter({ ...filter, price: priceVal });
            }}
          />
          <div>
            <input
              // type="reset"
              type="submit"
              value="Submit"
              // disabled
              onClick={() => updatedFilterSubmit()}
            />
            <input
              type="reset"
              value="Reset"
              // disabled
              onClick={() => {
                // setFilter({
                //   search: 0,
                //   sort: 0,
                //   category: 0,
                //   price: 100000,
                // });
                clearFilter();
              }}
            />
          </div>
        </form>
      </motion.div>
      <div className={styles.paginationPlusService}>
        <div className={styles.paginationDiv}>
          <IconContext.Provider value={{ className: styles.paginationIcons }}>
            {paginate.presentPage != 1 && (
              <MdNavigateBefore
                className={styles.prev}
                onClick={() => {
                  // console.log("filter next");
                  updatedFilterPrev();
                }}
              />
            )}
            <div className={styles.pageNum}>{paginate.presentPage}</div>
            <CgFormatSlash />
            <div className={styles.totPageNum}>
              {paginate && paginate.totalPages}
            </div>
            {paginate.presentPage != paginate.totalPages && (
              <MdNavigateNext
                className={styles.next}
                onClick={() => {
                  // console.log("filter next");
                  updatedFilterNext();
                }}
              />
            )}
          </IconContext.Provider>
        </div>
        {<Services data={filterData} />}

        <div className={styles.paginationDiv} style={{ marginBottom: "10px" }}>
          <IconContext.Provider value={{ className: styles.paginationIcons }}>
            {paginate.presentPage != 1 && (
              <MdNavigateBefore
                className={styles.prev}
                onClick={() => {
                  // console.log("filter next");
                  updatedFilterPrev();
                }}
              />
            )}
            <div className={styles.pageNum}>{paginate.presentPage}</div>
            <CgFormatSlash />
            <div className={styles.totPageNum}>
              {paginate && paginate.totalPages}
            </div>
            {paginate.presentPage != paginate.totalPages && (
              <MdNavigateNext
                className={styles.next}
                onClick={() => {
                  // console.log("filter next");
                  updatedFilterNext();
                }}
              />
            )}
          </IconContext.Provider>
        </div>
      </div>
    </div>
  ) : (
    "please Login"
  );
}

export default Search;
