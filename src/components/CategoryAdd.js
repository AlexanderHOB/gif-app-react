import React,{useState} from 'react'
import './CategoryAdd.css'
import PropTypes from 'prop-types'

export const CategoryAdd = ({setCategories}) => {
    const [category, setCategory] = useState('');
    const handleCategory = (e)=>{
        setCategory(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(category.trim().length >2){
            setCategories(cat => [category, ...cat])
            setCategory('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form__group field">
                <input
                    className="form__field"
                    type="text"
                    placeholder="Gif"
                    id="name"
                    required
                    value={category}
                    onChange={handleCategory}
                />
                <label className="form__label" htmlFor="name">Gif</label>
            </div>
        </form>
    )
}
CategoryAdd.propTypes = {
    setCategories:PropTypes.func.isRequired
}
