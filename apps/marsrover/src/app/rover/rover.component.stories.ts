import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RoverComponent } from './rover.component';
import { MapComponent } from "../map/map.component";

export default {
  title: 'RoverComponent',
  component: RoverComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [MapComponent, RoverComponent]
    })
  ],
} as Meta<RoverComponent>;

const Template: Story<RoverComponent> = (args: RoverComponent) => ({
  props: args,
  template: `<mr-map><mr-rover></mr-rover></mr-map>`

});


export const Primary = Template.bind({});
Primary.args = {}
