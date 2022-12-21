import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOrganization from '../../hooks/useOrganization';
import { Button } from '../shared/Button';
import Dropdown from '../shared/Dropdown';
import Input from '../shared/Input';
import NavigationBar from '../shared/NavigationBar';

type Item = { key: string | number; value: string };

const Header = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { organizations, setOrganizations, searchOrganizations } =
    useOrganization();
  const naviagte = useNavigate();

  const items = organizations.map<Item>((organization) => ({
    key: organization.id,
    value: organization.name,
  }));

  const searchValue = async (value: string) => {
    if (!value) {
      setOrganizations([]);
      return;
    }

    await searchOrganizations(value);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    await searchValue(e.target.value.trim());
  };

  const handleClickGroupCreateButton = () => {
    naviagte('/groups/create');
  };

  return (
    <NavigationBar
      left={<div>Chulcheck(출첵)</div>}
      middle={
        <Button onClick={handleClickGroupCreateButton}>그룹 만들기</Button>
      }
      right={
        <Dropdown
          items={items}
          trigger={
            <Input
              placeholder="그룹 검색"
              value={inputValue}
              onChange={handleChange}
            />
          }
          onClickItem={async (index) => {
            setInputValue(items[index].value);

            if (inputValue !== items[index].value) {
              await searchValue(items[index].value);
            }
          }}
        />
      }
    />
  );
};

export default Header;
