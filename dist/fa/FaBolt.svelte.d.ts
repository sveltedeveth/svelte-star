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
export type FaBoltProps = typeof __propDef.props;
export type FaBoltEvents = typeof __propDef.events;
export type FaBoltSlots = typeof __propDef.slots;
export default class FaBolt extends SvelteComponentTyped<FaBoltProps, FaBoltEvents, FaBoltSlots> {
}
export {};
