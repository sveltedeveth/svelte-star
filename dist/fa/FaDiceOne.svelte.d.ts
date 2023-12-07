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
export type FaDiceOneProps = typeof __propDef.props;
export type FaDiceOneEvents = typeof __propDef.events;
export type FaDiceOneSlots = typeof __propDef.slots;
export default class FaDiceOne extends SvelteComponentTyped<FaDiceOneProps, FaDiceOneEvents, FaDiceOneSlots> {
}
export {};
