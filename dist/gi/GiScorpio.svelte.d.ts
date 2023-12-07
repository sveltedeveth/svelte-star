import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiScorpioProps = typeof __propDef.props;
export type GiScorpioEvents = typeof __propDef.events;
export type GiScorpioSlots = typeof __propDef.slots;
export default class GiScorpio extends SvelteComponentTyped<GiScorpioProps, GiScorpioEvents, GiScorpioSlots> {
}
export {};
