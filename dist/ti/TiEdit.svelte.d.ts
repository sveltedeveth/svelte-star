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
export type TiEditProps = typeof __propDef.props;
export type TiEditEvents = typeof __propDef.events;
export type TiEditSlots = typeof __propDef.slots;
export default class TiEdit extends SvelteComponentTyped<TiEditProps, TiEditEvents, TiEditSlots> {
}
export {};
