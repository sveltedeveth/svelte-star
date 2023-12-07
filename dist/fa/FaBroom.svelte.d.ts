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
export type FaBroomProps = typeof __propDef.props;
export type FaBroomEvents = typeof __propDef.events;
export type FaBroomSlots = typeof __propDef.slots;
export default class FaBroom extends SvelteComponentTyped<FaBroomProps, FaBroomEvents, FaBroomSlots> {
}
export {};
