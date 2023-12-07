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
export type FaBloggerBProps = typeof __propDef.props;
export type FaBloggerBEvents = typeof __propDef.events;
export type FaBloggerBSlots = typeof __propDef.slots;
export default class FaBloggerB extends SvelteComponentTyped<FaBloggerBProps, FaBloggerBEvents, FaBloggerBSlots> {
}
export {};
