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
export type GoFileDirectoryProps = typeof __propDef.props;
export type GoFileDirectoryEvents = typeof __propDef.events;
export type GoFileDirectorySlots = typeof __propDef.slots;
export default class GoFileDirectory extends SvelteComponentTyped<GoFileDirectoryProps, GoFileDirectoryEvents, GoFileDirectorySlots> {
}
export {};
