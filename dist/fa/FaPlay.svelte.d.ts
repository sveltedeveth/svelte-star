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
export type FaPlayProps = typeof __propDef.props;
export type FaPlayEvents = typeof __propDef.events;
export type FaPlaySlots = typeof __propDef.slots;
export default class FaPlay extends SvelteComponentTyped<FaPlayProps, FaPlayEvents, FaPlaySlots> {
}
export {};
