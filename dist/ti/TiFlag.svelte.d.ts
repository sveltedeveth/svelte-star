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
export type TiFlagProps = typeof __propDef.props;
export type TiFlagEvents = typeof __propDef.events;
export type TiFlagSlots = typeof __propDef.slots;
export default class TiFlag extends SvelteComponentTyped<TiFlagProps, TiFlagEvents, TiFlagSlots> {
}
export {};
