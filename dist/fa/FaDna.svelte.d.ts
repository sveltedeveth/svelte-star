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
export type FaDnaProps = typeof __propDef.props;
export type FaDnaEvents = typeof __propDef.events;
export type FaDnaSlots = typeof __propDef.slots;
export default class FaDna extends SvelteComponentTyped<FaDnaProps, FaDnaEvents, FaDnaSlots> {
}
export {};
