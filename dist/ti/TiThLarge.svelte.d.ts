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
export type TiThLargeProps = typeof __propDef.props;
export type TiThLargeEvents = typeof __propDef.events;
export type TiThLargeSlots = typeof __propDef.slots;
export default class TiThLarge extends SvelteComponentTyped<TiThLargeProps, TiThLargeEvents, TiThLargeSlots> {
}
export {};
