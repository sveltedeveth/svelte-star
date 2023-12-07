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
export type FaDropboxProps = typeof __propDef.props;
export type FaDropboxEvents = typeof __propDef.events;
export type FaDropboxSlots = typeof __propDef.slots;
export default class FaDropbox extends SvelteComponentTyped<FaDropboxProps, FaDropboxEvents, FaDropboxSlots> {
}
export {};
