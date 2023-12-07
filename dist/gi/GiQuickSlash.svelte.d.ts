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
export type GiQuickSlashProps = typeof __propDef.props;
export type GiQuickSlashEvents = typeof __propDef.events;
export type GiQuickSlashSlots = typeof __propDef.slots;
export default class GiQuickSlash extends SvelteComponentTyped<GiQuickSlashProps, GiQuickSlashEvents, GiQuickSlashSlots> {
}
export {};
