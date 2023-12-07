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
export type GiLookAtProps = typeof __propDef.props;
export type GiLookAtEvents = typeof __propDef.events;
export type GiLookAtSlots = typeof __propDef.slots;
export default class GiLookAt extends SvelteComponentTyped<GiLookAtProps, GiLookAtEvents, GiLookAtSlots> {
}
export {};
