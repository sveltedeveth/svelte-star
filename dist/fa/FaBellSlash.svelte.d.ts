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
export type FaBellSlashProps = typeof __propDef.props;
export type FaBellSlashEvents = typeof __propDef.events;
export type FaBellSlashSlots = typeof __propDef.slots;
export default class FaBellSlash extends SvelteComponentTyped<FaBellSlashProps, FaBellSlashEvents, FaBellSlashSlots> {
}
export {};
