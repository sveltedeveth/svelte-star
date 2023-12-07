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
export type TiFolderDeleteProps = typeof __propDef.props;
export type TiFolderDeleteEvents = typeof __propDef.events;
export type TiFolderDeleteSlots = typeof __propDef.slots;
export default class TiFolderDelete extends SvelteComponentTyped<TiFolderDeleteProps, TiFolderDeleteEvents, TiFolderDeleteSlots> {
}
export {};
