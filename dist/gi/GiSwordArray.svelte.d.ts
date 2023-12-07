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
export type GiSwordArrayProps = typeof __propDef.props;
export type GiSwordArrayEvents = typeof __propDef.events;
export type GiSwordArraySlots = typeof __propDef.slots;
export default class GiSwordArray extends SvelteComponentTyped<GiSwordArrayProps, GiSwordArrayEvents, GiSwordArraySlots> {
}
export {};
