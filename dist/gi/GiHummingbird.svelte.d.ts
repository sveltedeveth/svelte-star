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
export type GiHummingbirdProps = typeof __propDef.props;
export type GiHummingbirdEvents = typeof __propDef.events;
export type GiHummingbirdSlots = typeof __propDef.slots;
export default class GiHummingbird extends SvelteComponentTyped<GiHummingbirdProps, GiHummingbirdEvents, GiHummingbirdSlots> {
}
export {};
