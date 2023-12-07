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
export type FaLaughProps = typeof __propDef.props;
export type FaLaughEvents = typeof __propDef.events;
export type FaLaughSlots = typeof __propDef.slots;
export default class FaLaugh extends SvelteComponentTyped<FaLaughProps, FaLaughEvents, FaLaughSlots> {
}
export {};
