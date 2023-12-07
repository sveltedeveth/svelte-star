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
export type GiFreemasonryProps = typeof __propDef.props;
export type GiFreemasonryEvents = typeof __propDef.events;
export type GiFreemasonrySlots = typeof __propDef.slots;
export default class GiFreemasonry extends SvelteComponentTyped<GiFreemasonryProps, GiFreemasonryEvents, GiFreemasonrySlots> {
}
export {};
