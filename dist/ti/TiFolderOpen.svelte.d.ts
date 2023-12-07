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
export type TiFolderOpenProps = typeof __propDef.props;
export type TiFolderOpenEvents = typeof __propDef.events;
export type TiFolderOpenSlots = typeof __propDef.slots;
export default class TiFolderOpen extends SvelteComponentTyped<TiFolderOpenProps, TiFolderOpenEvents, TiFolderOpenSlots> {
}
export {};
