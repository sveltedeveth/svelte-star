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
export type FaBookProps = typeof __propDef.props;
export type FaBookEvents = typeof __propDef.events;
export type FaBookSlots = typeof __propDef.slots;
export default class FaBook extends SvelteComponentTyped<FaBookProps, FaBookEvents, FaBookSlots> {
}
export {};
