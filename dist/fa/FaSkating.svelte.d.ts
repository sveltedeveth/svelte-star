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
export type FaSkatingProps = typeof __propDef.props;
export type FaSkatingEvents = typeof __propDef.events;
export type FaSkatingSlots = typeof __propDef.slots;
export default class FaSkating extends SvelteComponentTyped<FaSkatingProps, FaSkatingEvents, FaSkatingSlots> {
}
export {};
