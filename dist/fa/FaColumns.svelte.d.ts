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
export type FaColumnsProps = typeof __propDef.props;
export type FaColumnsEvents = typeof __propDef.events;
export type FaColumnsSlots = typeof __propDef.slots;
export default class FaColumns extends SvelteComponentTyped<FaColumnsProps, FaColumnsEvents, FaColumnsSlots> {
}
export {};
