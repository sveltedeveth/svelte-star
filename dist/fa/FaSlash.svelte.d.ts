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
export type FaSlashProps = typeof __propDef.props;
export type FaSlashEvents = typeof __propDef.events;
export type FaSlashSlots = typeof __propDef.slots;
export default class FaSlash extends SvelteComponentTyped<FaSlashProps, FaSlashEvents, FaSlashSlots> {
}
export {};
