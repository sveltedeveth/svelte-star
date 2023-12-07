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
export type GiRevoltProps = typeof __propDef.props;
export type GiRevoltEvents = typeof __propDef.events;
export type GiRevoltSlots = typeof __propDef.slots;
export default class GiRevolt extends SvelteComponentTyped<GiRevoltProps, GiRevoltEvents, GiRevoltSlots> {
}
export {};
