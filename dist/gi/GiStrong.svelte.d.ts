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
export type GiStrongProps = typeof __propDef.props;
export type GiStrongEvents = typeof __propDef.events;
export type GiStrongSlots = typeof __propDef.slots;
export default class GiStrong extends SvelteComponentTyped<GiStrongProps, GiStrongEvents, GiStrongSlots> {
}
export {};
