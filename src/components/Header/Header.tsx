import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrganizationList } from '../../api/organization';
import { Button } from '../shared/Button';
import Dropdown from '../shared/Dropdown';
import Input from '../shared/Input';
import NavigationBar from '../shared/NavigationBar';
import formatOrganization from './Header.helper';
import type { Organization } from '../../api/types';

type Item = { key: string | number; value: React.ReactNode };

// FIXME - 현재 organizations가 사라지는 버그 존재
const Header = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const naviagte = useNavigate();

  const items = organizations.map<Item>((organization) => ({
    key: organization.id,
    value: organization.name,
  }));

  const getOrganizations = async (query: string) => {
    if (!query) return;

    try {
      const data = await getOrganizationList(query);
      setOrganizations(formatOrganization(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const value = e.target.value.trim();

    if (!value) {
      setOrganizations([]);
      return;
    }

    await getOrganizations(value);
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
        />
      }
    />
  );
};

export default Header;
