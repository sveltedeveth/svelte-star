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
export type TiPlusProps = typeof __propDef.props;
export type TiPlusEvents = typeof __propDef.events;
export type TiPlusSlots = typeof __propDef.slots;
export default class TiPlus extends SvelteComponentTyped<TiPlusProps, TiPlusEvents, TiPlusSlots> {
}
export {};
