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
export type TiKeyProps = typeof __propDef.props;
export type TiKeyEvents = typeof __propDef.events;
export type TiKeySlots = typeof __propDef.slots;
export default class TiKey extends SvelteComponentTyped<TiKeyProps, TiKeyEvents, TiKeySlots> {
}
export {};
