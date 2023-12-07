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
export type TiFolderAddProps = typeof __propDef.props;
export type TiFolderAddEvents = typeof __propDef.events;
export type TiFolderAddSlots = typeof __propDef.slots;
export default class TiFolderAdd extends SvelteComponentTyped<TiFolderAddProps, TiFolderAddEvents, TiFolderAddSlots> {
}
export {};
