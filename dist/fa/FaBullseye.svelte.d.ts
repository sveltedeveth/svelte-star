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
export type FaBullseyeProps = typeof __propDef.props;
export type FaBullseyeEvents = typeof __propDef.events;
export type FaBullseyeSlots = typeof __propDef.slots;
export default class FaBullseye extends SvelteComponentTyped<FaBullseyeProps, FaBullseyeEvents, FaBullseyeSlots> {
}
export {};
