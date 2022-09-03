import { AutoComplete, Button, Col, Input, Layout, Row, Space, Tooltip } from 'antd'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import { SearchOutlined } from '@ant-design/icons'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

const searchResult = (query) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                )
            }
        })

function CustomHeader(props) {
    const { Header } = Layout
    const { Option } = AutoComplete
    const [result, setResult] = useState([])
    const [inputVisible, setInputVisible] = useState(false)
    const [buttonVisible, setButtonVisible] = useState(true)

    const [options, setOptions] = useState([])

    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : [])
    }

    const onSelect = (value) => {
        console.log('onSelect', value)
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    }))

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }))

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            }
        }
    }))

    return (
        <Header
            className="site-layout-sub-header-background"
            style={{
                padding: 0
            }}
        >
            {/*<Row justify="end" style={{ padding: '12px 16px' }}>*/}
            {/*    <Col xs={24} sm={20} md={16} lg={12} xl={8}>*/}
            {/*        <Input.Search*/}
            {/*            size="large"*/}
            {/*            placeholder="input here"*/}
            {/*            enterButton*/}
            {/*            style={{ display: inputVisible ? 'block' : 'none' }}*/}
            {/*            onBlur={() => {*/}
            {/*                setInputVisible(false)*/}
            {/*                setButtonVisible(true)*/}
            {/*            }}*/}
            {/*        />*/}
            {/*        <Tooltip title="search">*/}
            {/*            <Button*/}
            {/*                style={{ display: buttonVisible ? 'block' : 'none' }}*/}
            {/*                shape="circle"*/}
            {/*                icon={<SearchOutlined />}*/}
            {/*                size="large"*/}
            {/*                onClick={() => {*/}
            {/*                    setInputVisible(true)*/}
            {/*                    setButtonVisible(false)*/}
            {/*                }}*/}
            {/*            />*/}
            {/*        </Tooltip>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row justify="end" style={{ padding: '12px 16px' }}>
                <Col xs={24} sm={20} md={16} lg={12} xl={8}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                </Col>
            </Row>
            {/*<Row justify="end" style={{ paddingRight: 16, paddingLeft: 16 }}>*/}
            {/*  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 12 }} xl={{ span: 8, offset: 16 }}>*/}
            {/*    <Row>*/}
            {/*      <Col flex={'auto'}>*/}
            {/*        <AutoComplete*/}
            {/*          dropdownMatchSelectWidth={252}*/}
            {/*          style={{*/}
            {/*            width: 300*/}
            {/*          }}*/}
            {/*          options={options}*/}
            {/*          onSelect={onSelect}*/}
            {/*          onSearch={handleSearch}*/}
            {/*        >*/}
            {/*          <Input.Search size="large" placeholder="input here" enterButton />*/}
            {/*        </AutoComplete>*/}
            {/*      </Col>*/}
            {/*      <Col flex={'40px'} style={{ paddingTop: 12, paddingBottom: 12 }}>*/}
            {/*        <Avatar size={{ xs: 24, sm: 24, md: 32, lg: 40, xl: 40, xxl: 50 }} icon={<AntDesignOutlined />} />*/}
            {/*      </Col>*/}
            {/*    </Row>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
        </Header>
    )
}

export default CustomHeader
