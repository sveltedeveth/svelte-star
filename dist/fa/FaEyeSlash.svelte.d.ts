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
export type FaEyeSlashProps = typeof __propDef.props;
export type FaEyeSlashEvents = typeof __propDef.events;
export type FaEyeSlashSlots = typeof __propDef.slots;
export default class FaEyeSlash extends SvelteComponentTyped<FaEyeSlashProps, FaEyeSlashEvents, FaEyeSlashSlots> {
}
export {};
