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
export type FaTintSlashProps = typeof __propDef.props;
export type FaTintSlashEvents = typeof __propDef.events;
export type FaTintSlashSlots = typeof __propDef.slots;
export default class FaTintSlash extends SvelteComponentTyped<FaTintSlashProps, FaTintSlashEvents, FaTintSlashSlots> {
}
export {};
