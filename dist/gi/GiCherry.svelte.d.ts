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
export type GiCherryProps = typeof __propDef.props;
export type GiCherryEvents = typeof __propDef.events;
export type GiCherrySlots = typeof __propDef.slots;
export default class GiCherry extends SvelteComponentTyped<GiCherryProps, GiCherryEvents, GiCherrySlots> {
}
export {};
