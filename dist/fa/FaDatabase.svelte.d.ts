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
export type FaDatabaseProps = typeof __propDef.props;
export type FaDatabaseEvents = typeof __propDef.events;
export type FaDatabaseSlots = typeof __propDef.slots;
export default class FaDatabase extends SvelteComponentTyped<FaDatabaseProps, FaDatabaseEvents, FaDatabaseSlots> {
}
export {};
