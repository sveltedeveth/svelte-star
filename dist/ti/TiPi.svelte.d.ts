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
export type TiPiProps = typeof __propDef.props;
export type TiPiEvents = typeof __propDef.events;
export type TiPiSlots = typeof __propDef.slots;
export default class TiPi extends SvelteComponentTyped<TiPiProps, TiPiEvents, TiPiSlots> {
}
export {};
