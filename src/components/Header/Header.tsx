import Dropdown from '../shared/Dropdown';
import Input from '../shared/Input';
import NavigationBar from '../shared/NavigationBar';

// TODO - Header에 드롭다운 연결 및
const Header = () => {
  const items = [
    { key: '1', value: 'value1' },
    { key: '2', value: 'value2' },
  ];
  return (
    <NavigationBar
      left={<div>Chulcheck(출첵)</div>}
      right={
        <Dropdown items={items} trigger={<Input placeholder="그룹 검색" />} />
      }
    />
  );
};

export default Header;
