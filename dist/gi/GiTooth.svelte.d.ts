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
export type GiToothProps = typeof __propDef.props;
export type GiToothEvents = typeof __propDef.events;
export type GiToothSlots = typeof __propDef.slots;
export default class GiTooth extends SvelteComponentTyped<GiToothProps, GiToothEvents, GiToothSlots> {
}
export {};
