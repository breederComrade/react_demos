import styled from 'styled-components';

export const SearchWrapper = styled.div`
	position: relative;
	top: 0;
	float: left;
	//子组件里类名为iconfont的样式
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		// background:green;
		text-align: center;

		//1：如果focused为true则搜索图标加上这个样式（一个灰色圆底的效果）
		&.focused {
			background: #777;
			color: #fff;
		}
	}

	//1：进入时动画初始样式
	.yu-enter {
		transition: all 0.2s ease-out;
	}
	//2：动画执行
	.yu-enter-active {
		width: 240px; //输入框经过0.2秒，从160px变成240px
	}

	//3：离开时动画初始样式
	.yu-exit {
		transition: all 0.2s ease-out;
	}
	//4:动画执行
	.yu-enter-active {
		width: 160px; //输入框经过0.2秒，从240px变成160px
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
    width:160px;
    height:38px;
    padding:0 20px
    border:none;
    outline:none;
    background:#eee;
    box-sizing:border-box;
    border-radius:19px;
    font-size:13px;
    color:#666;
    //为此组件的placeholder属性加上样式
    &::placeholder{
         color:#999
    }
    
    //2：如果focused为true则输入框加上这个样式
    &.focused {
        width:200px;
        
    }
   
`;
