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
export type FaAwardProps = typeof __propDef.props;
export type FaAwardEvents = typeof __propDef.events;
export type FaAwardSlots = typeof __propDef.slots;
export default class FaAward extends SvelteComponentTyped<FaAwardProps, FaAwardEvents, FaAwardSlots> {
}
export {};
