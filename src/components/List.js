import React, { useContext } from 'react';
import listContext from '../contexts/list_context';
import { useProducts } from '../custom-hooks/';
import { Link } from 'react-router-dom';
import { formatNumber } from '../helpers/utils';
import styles from '../components/shared/ProductsGrid.module.css';
 

function List() {

  const [products, isLoading] = useProducts()

  if (isLoading) return <p>Loading...</p>

  const pdlist = products.map((i, index) => {

    return <div className="card card-body" key={index}>
             <Link to={`/${i.fields.slug}`}>
              <strong className="text-left">{i.fields.title}</strong>
           <img
          style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }}
          className="img-fluid"
          src={i.fields.image.fields.file.url}
          alt={i.fields.title}
        />
        <h3 className="text-left">{formatNumber(i.fields.price)}</h3>
      </Link>
      <div className="text-right">
        <Link to={`/${i.fields.slug}`} className="btn btn-link btn-sm mr-2">Details</Link>
        <Addbutton pd={i} />
      </div>

    </div>
  })

  return (
    <div className={styles.p__container}>
      <div className="text-center mt-5">
        <h1>Store</h1>
        <p>This is the Store Page.</p>
      </div>
      <div className="row">
        <div className="col-sm-8">
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input type="text" name="" placeholder="Search product" className="form-control" id="" />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>

        {pdlist}

      </div>
      <div className={`${styles.footer}  mt-5 p-3`}>
        <p>BootCamp 2020 © React Router V6 Store</p>
      </div>
    </div>
  );

}


function Addbutton(props) {

  const stt = useContext(listContext);

  return (
    <button onClick={() => stt.addNew(props.pd)} className="btn btn-primary btn-sm">
      Add To Cart
    </button>
  )
}

export default List;