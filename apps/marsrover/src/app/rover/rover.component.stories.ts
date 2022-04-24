import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MapComponent } from "../map/map.component";
import { RoverDirective } from "./rover.directive";

export default {
  component: MapComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [MapComponent, RoverDirective]
    })
  ],
} as Meta<MapComponent>;

const Template: Story<MapComponent> = (args: MapComponent) => ({
  props: args,
  template: `<mr-map><mr-rover></mr-rover></mr-map>`
});


export const Primary = Template.bind({});
Primary.args = {}
