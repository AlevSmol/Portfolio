import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import TechCard from '../TecnologyCard';
import TechCardBack from '../TechCardBack';

interface FlipCardProps {
  name: string;
  image: string;
  proficiency: number;
  description: string;
}

interface FlipCardState {
  isFlipped: boolean;
}

class FlipCard extends Component<FlipCardProps, FlipCardState> {
  constructor(props: FlipCardProps) {
    super(props);
    this.state = { isFlipped: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { name, image, proficiency, description } = this.props;

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div onClick={this.handleClick} className='cursor-pointer'>
            <TechCard name={name} image={image} proficiency={proficiency} />
        </div>

        <div onClick={this.handleClick} className='cursor-pointer'>
            <TechCardBack name={name} image={image} description={description} />
        </div>
      </ReactCardFlip>
    );
  }
}

export default FlipCard;
