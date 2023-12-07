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
export type FaVideoSlashProps = typeof __propDef.props;
export type FaVideoSlashEvents = typeof __propDef.events;
export type FaVideoSlashSlots = typeof __propDef.slots;
export default class FaVideoSlash extends SvelteComponentTyped<FaVideoSlashProps, FaVideoSlashEvents, FaVideoSlashSlots> {
}
export {};
