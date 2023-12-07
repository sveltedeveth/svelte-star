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
export type GiMouseProps = typeof __propDef.props;
export type GiMouseEvents = typeof __propDef.events;
export type GiMouseSlots = typeof __propDef.slots;
export default class GiMouse extends SvelteComponentTyped<GiMouseProps, GiMouseEvents, GiMouseSlots> {
}
export {};
