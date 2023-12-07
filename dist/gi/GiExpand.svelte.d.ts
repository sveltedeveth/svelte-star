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
export type GiExpandProps = typeof __propDef.props;
export type GiExpandEvents = typeof __propDef.events;
export type GiExpandSlots = typeof __propDef.slots;
export default class GiExpand extends SvelteComponentTyped<GiExpandProps, GiExpandEvents, GiExpandSlots> {
}
export {};
