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
export type TiInputCheckedProps = typeof __propDef.props;
export type TiInputCheckedEvents = typeof __propDef.events;
export type TiInputCheckedSlots = typeof __propDef.slots;
export default class TiInputChecked extends SvelteComponentTyped<TiInputCheckedProps, TiInputCheckedEvents, TiInputCheckedSlots> {
}
export {};
