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
export type TiNewsProps = typeof __propDef.props;
export type TiNewsEvents = typeof __propDef.events;
export type TiNewsSlots = typeof __propDef.slots;
export default class TiNews extends SvelteComponentTyped<TiNewsProps, TiNewsEvents, TiNewsSlots> {
}
export {};
