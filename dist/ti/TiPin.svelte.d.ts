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
export type TiPinProps = typeof __propDef.props;
export type TiPinEvents = typeof __propDef.events;
export type TiPinSlots = typeof __propDef.slots;
export default class TiPin extends SvelteComponentTyped<TiPinProps, TiPinEvents, TiPinSlots> {
}
export {};
