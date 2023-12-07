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
export type FaRandomProps = typeof __propDef.props;
export type FaRandomEvents = typeof __propDef.events;
export type FaRandomSlots = typeof __propDef.slots;
export default class FaRandom extends SvelteComponentTyped<FaRandomProps, FaRandomEvents, FaRandomSlots> {
}
export {};
