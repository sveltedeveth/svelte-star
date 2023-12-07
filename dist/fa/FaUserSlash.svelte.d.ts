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
export type FaUserSlashProps = typeof __propDef.props;
export type FaUserSlashEvents = typeof __propDef.events;
export type FaUserSlashSlots = typeof __propDef.slots;
export default class FaUserSlash extends SvelteComponentTyped<FaUserSlashProps, FaUserSlashEvents, FaUserSlashSlots> {
}
export {};
