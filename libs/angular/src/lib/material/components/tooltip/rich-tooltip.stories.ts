import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NgMaterialRichTooltipComponent } from './rich-tooltip';
import { NgMatTooltipModule } from '../../ng-mat-tootip.module';

const meta: Meta<NgMaterialRichTooltipComponent> = {
  component: NgMaterialRichTooltipComponent,
  title: 'Components/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [NgMatTooltipModule],
    }),
  ],
  argTypes: {},
};
export default meta;
type Story = StoryObj<NgMaterialRichTooltipComponent>;

export const DefaultRichTooltip: Story = {
  parameters: {
    storySource: {
      source: `
       <button ng-mat-tooltip id="someRequiredId" >Hover me</button>

        <ng-mat-rich-tooltip id="someRequiredId"  [showDelay]="100" [hideDelay]="100" [xPosition]="XPosition.Below" [yPosition]="XPosition.Center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
          aliquam sit amet sit amet eros.
          <a ng-mat-tooltip-content-link  href="google.com">Some link</a>

        </ng-mat-rich-tooltip>

        //Require the import of NgMatTooltipModule from libs/angular
         //XPosition, YPosition form '@material/tooltip'
        //I does not update dynamic properties as properties get initialized one by a script in AfterViewInit
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: ` <button ng-mat-tooltip id="someRequiredId" >Hover me</button>

    <ng-mat-rich-tooltip id="someRequiredId" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
      aliquam sit amet sit amet eros.
      <a ng-mat-tooltip-content-link  href="google.com">Some link</a>

    </ng-mat-rich-tooltip>`,
  }),
  args: {},
};
