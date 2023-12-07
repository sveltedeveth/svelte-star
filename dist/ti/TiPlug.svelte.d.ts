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
export type TiPlugProps = typeof __propDef.props;
export type TiPlugEvents = typeof __propDef.events;
export type TiPlugSlots = typeof __propDef.slots;
export default class TiPlug extends SvelteComponentTyped<TiPlugProps, TiPlugEvents, TiPlugSlots> {
}
export {};
