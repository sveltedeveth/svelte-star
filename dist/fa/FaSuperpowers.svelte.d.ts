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
export type FaSuperpowersProps = typeof __propDef.props;
export type FaSuperpowersEvents = typeof __propDef.events;
export type FaSuperpowersSlots = typeof __propDef.slots;
export default class FaSuperpowers extends SvelteComponentTyped<FaSuperpowersProps, FaSuperpowersEvents, FaSuperpowersSlots> {
}
export {};
