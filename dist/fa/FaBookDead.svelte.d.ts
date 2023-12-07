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
export type FaBookDeadProps = typeof __propDef.props;
export type FaBookDeadEvents = typeof __propDef.events;
export type FaBookDeadSlots = typeof __propDef.slots;
export default class FaBookDead extends SvelteComponentTyped<FaBookDeadProps, FaBookDeadEvents, FaBookDeadSlots> {
}
export {};
