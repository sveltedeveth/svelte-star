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
export type GiNurseMaleProps = typeof __propDef.props;
export type GiNurseMaleEvents = typeof __propDef.events;
export type GiNurseMaleSlots = typeof __propDef.slots;
export default class GiNurseMale extends SvelteComponentTyped<GiNurseMaleProps, GiNurseMaleEvents, GiNurseMaleSlots> {
}
export {};
