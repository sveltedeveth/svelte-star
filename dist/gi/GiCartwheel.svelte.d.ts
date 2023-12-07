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
export type GiCartwheelProps = typeof __propDef.props;
export type GiCartwheelEvents = typeof __propDef.events;
export type GiCartwheelSlots = typeof __propDef.slots;
export default class GiCartwheel extends SvelteComponentTyped<GiCartwheelProps, GiCartwheelEvents, GiCartwheelSlots> {
}
export {};
