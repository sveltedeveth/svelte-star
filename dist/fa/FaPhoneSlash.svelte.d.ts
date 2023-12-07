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
export type FaPhoneSlashProps = typeof __propDef.props;
export type FaPhoneSlashEvents = typeof __propDef.events;
export type FaPhoneSlashSlots = typeof __propDef.slots;
export default class FaPhoneSlash extends SvelteComponentTyped<FaPhoneSlashProps, FaPhoneSlashEvents, FaPhoneSlashSlots> {
}
export {};
