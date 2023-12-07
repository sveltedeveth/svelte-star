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
export type TiWorldProps = typeof __propDef.props;
export type TiWorldEvents = typeof __propDef.events;
export type TiWorldSlots = typeof __propDef.slots;
export default class TiWorld extends SvelteComponentTyped<TiWorldProps, TiWorldEvents, TiWorldSlots> {
}
export {};
