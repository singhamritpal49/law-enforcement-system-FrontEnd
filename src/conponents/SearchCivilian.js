import React, { Component } from 'react';
import Select from 'react-select';

class SearchCivilian extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSearch = (opt) => {
        this.props.handleCivilian(opt.value)
    }


    render() {
        let people = this.props.civilians.map(civilian => {
            const fullName = `${civilian.first_name} ${civilian.last_name} `
            return { label: fullName, value: civilian.social_security_number }
        })
        return (
            <div>
                <Select options={people} onChange={this.handleSearch} />
                    {/* onChange={opt => console.log(opt.label, opt.value)} /> */}
              
            </div>
        );
    }
}

export default SearchCivilian;
