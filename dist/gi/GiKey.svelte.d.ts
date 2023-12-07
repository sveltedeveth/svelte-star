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
export type GiKeyProps = typeof __propDef.props;
export type GiKeyEvents = typeof __propDef.events;
export type GiKeySlots = typeof __propDef.slots;
export default class GiKey extends SvelteComponentTyped<GiKeyProps, GiKeyEvents, GiKeySlots> {
}
export {};
