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
export type GiMummyHeadProps = typeof __propDef.props;
export type GiMummyHeadEvents = typeof __propDef.events;
export type GiMummyHeadSlots = typeof __propDef.slots;
export default class GiMummyHead extends SvelteComponentTyped<GiMummyHeadProps, GiMummyHeadEvents, GiMummyHeadSlots> {
}
export {};
