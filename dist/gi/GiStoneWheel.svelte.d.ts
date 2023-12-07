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
export type GiStoneWheelProps = typeof __propDef.props;
export type GiStoneWheelEvents = typeof __propDef.events;
export type GiStoneWheelSlots = typeof __propDef.slots;
export default class GiStoneWheel extends SvelteComponentTyped<GiStoneWheelProps, GiStoneWheelEvents, GiStoneWheelSlots> {
}
export {};
